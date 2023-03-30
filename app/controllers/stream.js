import CatRemoveEvent from '#app/events/categories/remove.js';
import ItemsCreateEvent from '#app/events/items/create.js';
import ItemsUpdateEvent from '#app/events/items/update.js';
import ItemsRemoveEvent from '#app/events/items/remove.js';
import ItemsUpdateScreenEvent from '#app/events/items/update-screen.js';
import CatChangeEvent from '#app/events/categories/change.js';
import Broadcast from '#app/globals/broadcast.js';
import Eventbus from '#app/globals/events.js';
import { ItemModel, CategoryModel } from '#app/globals/models.js';

const channel = Broadcast.createChannel('sse screen');

function sendToClient(client, event, data) {
  client.res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
}

Eventbus.on(CatChangeEvent.name, async (e) => {
  try {
    if(!e.id) return;

    const cat = await CategoryModel.findOne({ where: { id: e.id } });

    if(!cat) return;

    channel.emit((client) => {
      sendToClient(client, 'change:category', cat);
    });

  } catch(e) {
    console.log(e);
  }
});

Eventbus.on(CatRemoveEvent.name, (e) => {
  channel.emit((client) => {
    sendToClient(client, 'remove:cat', e.id);
  });
});

Eventbus.on(ItemsUpdateScreenEvent.name, (e) => {
  channel.emit((client) => {
    sendToClient(client, 'update:item', e.item);
  });
});

Eventbus.on(ItemsCreateEvent.name, (e) => {
  channel.emit((client) => {
    sendToClient(client, 'create:item', e.item);
  });
});

Eventbus.on(ItemsUpdateEvent.name, async (e) => {
  try {
    if(!e.id) return;

    const item = await ItemModel.findOne({ where: { id: e.id } });

    if(!item) return;

    channel.emit((client) => {
      sendToClient(client, 'update:item', item);
    });
  } catch(e) {
    console.log(e);
  }
});

Eventbus.on(ItemsRemoveEvent.name, (e) => {
  channel.emit((client) => {
    sendToClient(client, 'remove:item', e.id);
  });
});

export async function on(req, res) {
  res.set({
    'Cache-Control': 'no-store',
    'Content-Type': 'text/event-stream'
  });

  channel.add(res, { req, res });
}
