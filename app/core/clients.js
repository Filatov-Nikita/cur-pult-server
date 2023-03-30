class Clients {
  constructor() {
    this.list = new Map();
  }

  add(key, data) {
    this.list.set(key, data);
  }

  remove(key) {
    this.list.delete(key);
  }

  broadcast(cb) {
    this.list.forEach(client => {
      cb(client);
    });
  }
}

export default Clients;
