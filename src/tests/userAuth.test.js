import mongoose from 'mongoose';
import testBase from './index.js';
import { createUsers, deleteUsers } from './TestData/userTestData.js';
let password;
describe('Authorise a User', function () {
  beforeAll((done) => {
    done();
  });

  beforeEach(async function () {
    await createUsers();
  });

  afterEach(async function () {
    await deleteUsers();
    // await  mongoose.connect.close
  });

  afterAll(async () => {
    mongoose.connection.close();
  });

  it('should not use an already taken email', async () => {
    const res = await testBase.post('/auth/user/signup').send({
      name: 'Paul K',
      username: 'donmart',
      email: 'user1@gmail.com',
      password: '12345678',
    });
    expect(res.status).toBe(409);
    expect(res.body.message).toBe('Email has been taken');
  });

  it('should sign in a user', async () => {
    const res = await testBase.post('/auth/user/signin').send({
      email: 'user1@gmail.com',
      password: '12345678',
    });
    expect(res.status).toBe(201);
    expect(res.body).toMatchObject({
      token: expect.stringMatching(/^(?:[\w-]*\.){2}[\w-]*$/),
    });
  });
  it('should not use an already taken username', async () => {
    const res = await testBase.post('/auth/user/signup').send({
      name: 'Paul K',
      username: 'User1',
      email: 'donmart@gmail.com',
      password: '12345678',
    });
    expect(res.status).toBe(409);
    expect(res.body.message).toBe('Username has been taken');
  });

  it('should register a user', async () => {
    const res = await testBase.post('/auth/user/signup').send({
      name: 'Paul K',
      username: 'User18',
      email: 'donmart@gmail.com',
      password: '12345678',
    });
    expect(res.status).toBe(201);
    expect(res.body.message).toBe('User Registered');
  });

  it('should not signIn a user given a wrong email', async () => {
    const res = await testBase.post('/auth/user/signin').send({
      email: 'use@gmail.com',
      password: '12345678',
    });
    expect(res.status).toBe(400);
  });

  it('should not signin a user given a wrong password', async () => {
    const res = await testBase.post('/auth/user/signin').send({
      email: 'user1@gmail.com',
      password: '1234567823232323',
    });
    expect(res.status).toBe(401);
    expect(res.body.Error).toBe('Please Check Email or Password');
  });

  it('should signout a user', async () => {
    const res = await testBase.post('/auth/user/signout').send();
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('User has signed out!');
  });
});
