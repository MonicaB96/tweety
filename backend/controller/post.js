const postService = require('../service/post');
const {
  BadRequestExeption,
  UserNotFoundException,
} = require('../utils/exceptions');
const {
  createPostReqSchema,
  getPostsByAuthorIdReqSchema,
} = require('./schemas/requestSchema');

class PostController {
  async createPost(req, res) {
    createPostReqSchema
      .isValid(req.body)
      .then(async (valid) => {
        if (!valid) {
          throw new BadRequestExeption('Post should have author and text');
        } else {
          const post = await postService.createPost(req.body);
          res.status(201).json(post);
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
  async getPostsByAuthorId(req, res) {
    getPostsByAuthorIdReqSchema
      .isValid(req.query.authorId)
      .then(async (valid) => {
        if (!valid) {
          throw new BadRequestExeption('Author id is not valid');
        } else {
          const posts = await postService.getPostsByAuthorId(
            req.query.authorId,
          );
          res.status(200).json(posts);
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

module.exports = new PostController();
