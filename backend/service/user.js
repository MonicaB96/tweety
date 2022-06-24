const userRepo = require('../repository/user');
const {
  UserAlreadyExistsException,
  UserNotFoundException,
} = require('../utils/exceptions');

class UserService {
  async createUser(userObject) {
    const { email, firstName, lastName, birthday } = userObject;
    const res = await userRepo.emailExists(email);
    if (res) {
      throw new UserAlreadyExistsException();
    }
    return await userRepo.createUser(email, firstName, lastName, birthday);
  }

  async getUserByEmail(email) {
    const res = await userRepo.getUserByEmail(email);
    if (!res) {
      throw new UserNotFoundException();
    }
    return res;
  }
}

module.exports = new UserService();
