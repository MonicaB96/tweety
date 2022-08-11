const yup = require('yup');

let createUserReqSchema = yup.object().shape({
  email: yup.string().email().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  birthday: yup.date().required(),
});

let getUserByEmailReqSchema = yup.string().email().required();

let createPostReqSchema = yup.object().shape({
  authorId: yup.string().required(),
  text: yup
    .string()
    .test(
      'len',
      'Must have a length of at least 1, but lower than 200 characters',
      (val) => val && val.length <= 200 && val.length > 0,
    ),
});

let getPostsByAuthorIdReqSchema = yup.string().required();

module.exports = {
  createUserReqSchema,
  getUserByEmailReqSchema,
  createPostReqSchema,
  getPostsByAuthorIdReqSchema,
};
