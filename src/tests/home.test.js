/* eslint-disable no-undef */
import mongoose from 'mongoose';
import request from 'supertest';
import app from '../app';

describe('Home page test', () => {
  beforeAll((done) => {
    done();
  });

  afterAll((done) => {
    mongoose.connection.close();
    done();
  });

  it('should return the home route', async () => {
    const res = await request(app).get('/');
    expect(res.status).toEqual(200);
    expect(res.text).toEqual('Home');
  });
  it('should return a 404 if the route is not valid', async () => {
    const get = await request(app).get('/undefinedurl');
    const post = await request(app).post('/undefinedurl');
    const patch = await request(app).patch('/undefinedurl');
    const put = await request(app).put('/undefinedurl');
    const del = await request(app).delete('/undefinedurl');

    expect(get.status).toEqual(404);
    expect(post.status).toEqual(404);
    expect(patch.status).toEqual(404);
    expect(put.status).toEqual(404);
    expect(del.status).toEqual(404);

    expect(get.body).toEqual({ message: 'resource not found' });
    expect(post.body).toEqual({ message: 'resource not found' });
    expect(patch.body).toEqual({ message: 'resource not found' });
    expect(put.body).toEqual({ message: 'resource not found' });
    expect(del.body).toEqual({ message: 'resource not found' });
  });
});
