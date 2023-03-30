import Eventbus from '#app/globals/events.js';

class Event {
  static run(...args) {
    const event = new this(...args);
    Eventbus.emit(this.name, event);
  }
}

export default Event;
