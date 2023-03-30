import Event from '#app/core/events.js';

class Update extends Event {
  static name = Symbol('itemsUpdateEvent');

  constructor(id) {
    super();
    this.id = id;
  }
}

export default Update;
