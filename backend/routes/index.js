const express = require('express');
const UserController = require('../controller/user');
const PostController = require('../controller/post');

const router = express.Router();
router.post('/user', UserController.createUser);
router.get('/user', UserController.getUserByEmail);
router.post('/post', PostController.createPost);
router.get('/post', PostController.getPostsByAuthorId);

module.exports = router;
