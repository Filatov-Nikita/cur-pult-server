import { CategoryModel } from '#app/globals/models.js';
import NotFound from '#app/errors/NotFound.js';
import ChangeEvent from '#app/events/categories/change.js';
import RemoveEvent from '#app/events/categories/remove.js';

export async function list(req, res) {
  const cats = await CategoryModel.findAll();
  res.json(cats);
}

export async function show(req, res, next) {
  const id = req.params.id;
  const cat = await CategoryModel.findOne({ where: { id  } });

  if(cat === null) {
    next(new NotFound());
  } else {
    res.json(cat);
  }
}

export async function update(req, res, next) {
  try {
    const id = req.params.id;
    const { name } = req.body;
    await CategoryModel.update({ name }, { where: { id } });
    res.json(true);
  } catch(e) {
    next(e);
  }
}

export async function create(req, res, next) {
  try {
    const { name } = req.body;
    const cat = await CategoryModel.create({ name });
    res.json(cat);
  } catch(e) {
    next(e);
  }
}

export async function remove(req, res, next) {
  try {
    const id = +req.params.id;
    await CategoryModel.destroy({ where: { id } });
    RemoveEvent.run(id);
    res.json(true);
  } catch(e) {
    next(e);
  }
}

export async function broadcast(req, res) {
  const id = +req.params.id;
  ChangeEvent.run(id);
  res.json(true);
}
