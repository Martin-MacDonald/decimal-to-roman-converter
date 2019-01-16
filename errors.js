class NotNumberException extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotNumberException';
  }

  toString() {
    return `${this.name}: ${this.message}`;
  }
}

class NotValidIntegerException extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotValidIntegerException';
  }

  toString() {
    return `${this.name}: ${this.message}`;
  }
}

module.exports = {
  NotNumberException,
  NotValidIntegerException,
};