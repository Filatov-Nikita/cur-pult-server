class Channel {
  constructor(description) {
    this.id = Symbol(description);
    this.clients = new Map();
  }

  add(res, req) {
    const client = { res, req };
    this.clients.set(res, client);
    res.on('close', () => this.remove(req));
    return client;
  }

  remove(key) {
    this.clients.delete(key);
  }

  emit(callback) {
    this.clients.forEach(callback);
  }
}

export default Channel;
