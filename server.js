import './app/config/index.js';
import '#app/globals/models.js';
import express from 'express';
import { PORT } from './app/config/app.js';
import runRoutes from './app/routes/index.js';
import cors from 'cors';
import { ValidationError } from 'sequelize';
import NotFound from '#app/errors/NotFound.js';
import converEmptyStringToNull from '#app/middlewares/converEmptyStringToNull.js';

const server = express();

server.use(cors());
server.use(express.static('./public'));
server.use(express.json());
server.use(converEmptyStringToNull);

runRoutes(server);

server.use(function (e, req, res, next) {
  if(e instanceof ValidationError) {
    res.status(422).json(e.errors.map(i => i.message));
  } else if(e instanceof NotFound) {
    res.status(404).end('Запрашиваемый ресурс не найден');
  } else {
    console.error(e);
    res.status(500).end('Произошла ошибка на сервере');
    next();
  }
});

server.listen(PORT);
