const req = require('supertest');
const app = require('../server');

describe('createPost', () => {
  it('should return 201 if post is created successfully', async () => {
    const res = await req(app).post('/post').send({
      authorId: 1,
      text: 'Hello',
    });
    expect(res.status).toEqual(201);
  });
  it('should return 400 if mandatory fields are not specified', async () => {
    const res = await req(app).post('/post').send({});
    expect(res.status).toEqual(400);
  });
  it('should return 404 if user is not found', async () => {
    const res = await req(app).post('/post').send({
      authorId: 10,
      text: 'Hello 10',
    });
    expect(res.status).toEqual(404);
  });
});

describe('getPostsByAuthorId', () => {
  it('should return 200 if author id exists', async () => {
    const res = await req(app).get('/post?authorId=1');
    expect(res.status).toEqual(200);
  });
  it('should return 400 if author id is not specified', async () => {
    const res = await req(app).get('/post');
    expect(res.status).toEqual(400);
  });
  it('should return 404 if author id does not exist', async () => {
    const res = await req(app).get('/post?authorId=0');
    expect(res.status).toEqual(404);
  });
});
