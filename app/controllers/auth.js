import { UserModel } from '#app/globals/models.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import NotFound from '#app/errors/NotFound.js';

export async function create(req, res, next) {
  try {
    const { name = null, username, password } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const user = await UserModel.create({ name, username, password: hash });

    res.json({ id: user.id, name: user.name, username: user.username });
  } catch(e) {
    next(e);
  }
}

export async function login(req, res, next) {
  try {
    let { username, password } = req.body;

    username = username.trim().toLowerCase();

    const user = await UserModel.findOne({ where: { username } });

    if(user === null) throw new NotFound();

    const result = await bcrypt.compare(password, user.password);

    if(!result) return res.status(400).json('Неправильный логин или пароль');

    const token = jwt.sign({ id: user.id }, 'cur-rb', { expiresIn: '365d' });

    return res.json({ token });
  } catch(e) {
    next(e);
  }
}
