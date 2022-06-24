const postRepo = require('../repository/post');
const userRepo = require('../repository/user');
const { UserNotFoundException } = require('../utils/exceptions');

class PostService {
  async createPost(postObject) {
    const { authorId, text } = postObject;
    const res = await userRepo.exists(authorId);
    if (!res) {
      throw new UserNotFoundException();
    }
    return await postRepo.createPost(authorId, text);
  }
}

module.exports = new PostService();
