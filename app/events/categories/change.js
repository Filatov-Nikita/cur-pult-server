import Event from '#app/core/events.js';

class Change extends Event {
  static name = Symbol('catChangeOnScreenEvent');

  constructor(id) {
    super();
    this.id = id;
  }
}

export default Change;
