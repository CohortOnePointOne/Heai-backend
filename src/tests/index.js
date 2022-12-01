/* eslint-disable import/no-extraneous-dependencies */
import request from 'supertest';
import app from '../app';

const version = '/api/v1';
const appInstance = request(app);
class testBase {
  static post(url) {
    return appInstance.post(`${version}${url}`);
  }

  static get(url) {
    return appInstance.get(`${version}${url}`);
  }

  static patch(url) {
    return appInstance.patch(`${version}${url}`);
  }

  static delete(url) {
    return appInstance.delete(`${version}${url}`);
  }
}

export default testBase;
