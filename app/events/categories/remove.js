import Event from '#app/core/events.js';

class Remove extends Event {
  static name = Symbol('catRemoveEvent');

  constructor(id) {
    super();
    this.id = id;
  }
}

export default Remove;
