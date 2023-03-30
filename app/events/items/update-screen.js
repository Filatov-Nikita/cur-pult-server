import Event from '#app/core/events.js';

class UpdateScreen extends Event {
  static name = Symbol('itemsUpdateScreenEvent');

  constructor(item) {
    super();
    this.item = item;
  }
}

export default UpdateScreen;
