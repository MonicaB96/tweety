const postService = require('../service/post');
const {
  BadRequestExeption,
  UserNotFoundException,
} = require('../utils/exceptions');
const { createPostReqSchema } = require('./schemas/requestSchema');

class PostController {
  async createPost(req, res) {
    createPostReqSchema
      .isValid(req.body)
      .then(async (valid) => {
        if (!valid) {
          throw new BadRequestExeption('Post should have author and text');
        } else {
          const id = await postService.createPost(req.body);
          res.status(201).json(id);
        }
      })
      .catch((err) => {
        if (
          err instanceof UserNotFoundException ||
          err instanceof BadRequestExeption
        ) {
          res.status(err.status).json(err.message);
        } else {
          res.status(500).json('Something went wrong: ' + err.detail);
        }
      });
  }
}

module.exports = new PostController();
