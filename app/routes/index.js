import * as Cats from '#app/controllers/categories.js';
import * as Items from '#app/controllers/items.js';
import * as Stream from '#app/controllers/stream.js';
import * as Auth from '#app/controllers/auth.js';

export default (app) => {
  app.post('/registr', Auth.create);
  app.post('/login', Auth.login);

  app.get('/categories', Cats.list);
  app.get('/categories/:id', Cats.show);
  app.post('/categories', Cats.create);
  app.patch('/categories/:id', Cats.update);
  app.delete('/categories/:id', Cats.remove);
  app.post('/categories/:id/broadcast', Cats.broadcast);

  app.get('/items', Items.list);
  app.post('/items', Items.create);
  app.patch('/items/:id', Items.update);
  app.delete('/items/:id', Items.remove);
  app.post('/items/:id/update-screen', Items.updateOnScreen);

  app.get('/sse-stream', Stream.on)
}
