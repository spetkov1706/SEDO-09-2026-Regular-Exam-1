class UserService {
  #users = [];

  addUser(name) {
    const trimmed = String(name || '').trim();
    if (!trimmed) {
      throw new Error('User name is required.');
    }
    this.#users.push(trimmed);
  }

  getUsers() {
    return [...this.#users];
  }
}