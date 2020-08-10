const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL_API);

const path = '/users';

function putUser(bodyPutData) {
  return api.put(path + `/2`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(bodyPutData);
}

module.exports = {
  putUser,
}