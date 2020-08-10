const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL_API);

const path = '/users';

function deleteUser() {
  return api.delete(path + `/2`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');
}

module.exports = {
  deleteUser,
}