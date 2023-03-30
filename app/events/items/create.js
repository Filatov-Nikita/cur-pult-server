import Event from '#app/core/events.js';

class Create extends Event {
  static name = Symbol('itemsCreateEvent');

  constructor(item) {
    super();
    this.item = item;
  }
}

export default Create;
