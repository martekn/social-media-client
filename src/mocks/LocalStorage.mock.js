export class LocalStorageMock {
  constructor() {
    this.storage = {};
  }

  setItem = jest.fn((key, value) => {
    this.storage[key] = value.toString();
  });

  getItem = jest.fn((key) => this.storage[key] || null);

  removeItem = jest.fn((key) => {
    delete this.storage[key];
  });

  clear = jest.fn(() => {
    this.storage = {};
  });
}
