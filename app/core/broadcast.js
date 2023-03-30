import Channel from './channel.js';

class Broadcast {
  constructor() {
    this.channels = {};
    this.ids = [];
  }

  createChannel(description) {
    const channel = new Channel(description);
    this.ids.push(channel.id);
    this.channels[channel.id] = channel;
    return channel;
  }
}

export default Broadcast;
