import { ItemModel } from '#app/globals/models.js';
import CreateEvent from '#app/events/items/create.js';
import UpdateEvent from '#app/events/items/update.js';
import RemoveEvent from '#app/events/items/remove.js';
import UpdateScreen from '#app/events/items/update-screen.js';

export async function list(req, res, next) {
  const items = await ItemModel.findAll();
  res.json(items);
}

export async function create(req, res, next) {
  try {
    let { name, value, title, icon, period, trend, size, x, y, CategoryId } = req.body;
    trend = trend ?? null;

    const item = await ItemModel.create({
      icon, name, value, title, period, trend, size, x, y, CategoryId
    });

    res.json(item);

    CreateEvent.run(item);
  } catch(e) {
    next(e);
  }
}

export async function update(req, res, next) {
  try {
    const { id } = req.params;
    const { name, value, title, icon, period, trend, size, x, y, CategoryId } = req.body;

    await ItemModel.update(
      { name, value, title, icon, period, trend, size, x, y, CategoryId },
      { where: { id } }
    );

    UpdateEvent.run(id);

    res.json(true);
  } catch(e) {
    next(e);
  }
}

export async function remove(req, res, next) {
  try {
    const id = +req.params.id;
    await ItemModel.destroy({ where: { id } });
    RemoveEvent.run(id);
    res.json(true);
  } catch(e) {
    next(e);
  }
}

export async function updateOnScreen(req, res) {
  const itemId = +req.params.id;
  const keys = ['name', 'value', 'title', 'icon', 'period', 'trend', 'size', 'x', 'y'];
  const partialItem = { id: itemId };

  keys.forEach(k => {
    if(req.body[k] !== undefined) {
      partialItem[k] = req.body[k];
    }
  });

  UpdateScreen.run(partialItem);
  res.json(true);
}
