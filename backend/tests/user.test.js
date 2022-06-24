const req = require('supertest');
const app = require('../server');

describe('createUser', () => {
  it('should return 201 if user is created successfully', async () => {
    const res = await req(app).post('/user').send({
      email: 'email@test.com',
      firstName: 'Test1',
      lastName: 'Test',
      birthday: '2003-02-15',
    });
    expect(res.status).toEqual(201);
  });
  it('should return 400 if mandatory fields are not specified', async () => {
    const res = await req(app).post('/user').send({});
    expect(res.status).toEqual(400);
  });
  it('should return 409 if email address already exists', async () => {
    const res = await req(app).post('/user').send({
      email: 'email2@email.com',
      firstName: 'Test1',
      lastName: 'Test',
      birthday: '2003-02-15',
    });
    expect(res.status).toEqual(409);
  });
});

describe('getUserByEmail', () => {
  it('should return 200 if user is found', async () => {
    const res = await req(app).get('/user?email=email1@email.com');
    expect(res.status).toEqual(200);
  });
  it('should return 400 if email is not specified', async () => {
    const res = await req(app).get('/user');
    expect(res.status).toEqual(400);
  });
  it('should return 404 if email does not exist', async () => {
    const res = await req(app).get('/user?email=notAnEmail@email.com');
    expect(res.status).toEqual(404);
  });
});
