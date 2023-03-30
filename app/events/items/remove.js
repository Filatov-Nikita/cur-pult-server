import Event from '#app/core/events.js';

class Remove extends Event {
  static name = Symbol('itemsRemoveEvent');

  constructor(id) {
    super();
    this.id = id;
  }
}

export default Remove;
