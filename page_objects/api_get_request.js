const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL_API);

const path = '/users';

function getUserList() {
  return api.get(path)
    .query({ page: 1 })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');
}

module.exports = {
  getUserList,
}