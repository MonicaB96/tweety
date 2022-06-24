const userService = require('../service/user');
const {
  createUserReqSchema,
  getUserByEmailReqSchema,
} = require('./schemas/requestSchema');
const {
  UserAlreadyExistsException,
  BadRequestExeption,
  UserNotFoundException,
} = require('../utils/exceptions');

class UserController {
  async createUser(req, res) {
    createUserReqSchema
      .isValid(req.body)
      .then(async (valid) => {
        if (!valid) {
          throw new BadRequestExeption(
            'User should have email, firstName, lastName and birthday',
          );
        } else {
          const id = await userService.createUser(req.body);
          res.status(201).json(id);
        }
      })
      .catch((err) => {
        if (
          err instanceof UserAlreadyExistsException ||
          err instanceof BadRequestExeption
        ) {
          res.status(err.status).json(err.message);
        } else {
          res.status(500).json('Something went wrong: ' + err.detail);
        }
      });
  }

  async getUserByEmail(req, res) {
    getUserByEmailReqSchema
      .isValid(req.query.email)
      .then(async (valid) => {
        if (!valid) {
          throw new BadRequestExeption('Email is not valid');
        } else {
          const user = await userService.getUserByEmail(req.query.email);
          res.status(200).json(user);
        }
      })
      .catch((err) => {
        if (
          err instanceof UserNotFoundException ||
          err instanceof BadRequestExeption
        ) {
          res.status(err.status).json(err.message);
        } else {
          console.log(err);
          res.status(500).json('Something went wrong: ' + err.detail);
        }
      });
  }
}

module.exports = new UserController();
