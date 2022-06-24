const badRequestMsg = 'Invalid request: ';
const emailExistsMsg = 'Email already exists';
const userNotFoundMsg = 'Not found';

class BadRequestExeption extends Error {
  constructor(msg) {
    super(badRequestMsg + msg);
    this.name = 'BadRequestExeption';
    this.status = 400;
  }
}

class UserAlreadyExistsException extends Error {
  constructor(msg) {
    super(msg || emailExistsMsg);
    this.name = 'UserAlreadyExistsException';
    this.status = 409;
  }
}

class UserNotFoundException extends Error {
  constructor(msg) {
    super(userNotFoundMsg || msg);
    this.name = 'UserNotFoundException';
    this.status = 404;
  }
}

module.exports = {
  BadRequestExeption,
  UserAlreadyExistsException,
  UserNotFoundException,
};
