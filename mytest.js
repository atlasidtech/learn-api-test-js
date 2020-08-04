const { expect } = require('chai');
const supertest = require('supertest');

const api = supertest('https://reqres.in/api');

const path = '/users';

function getUserList() {
  return api.get(path).query({ page: 1 })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');
}

describe('@get user', () => {
  it(`@get it success get user list data`, async () => {
    const response = await getUserList();
    expect(response.status).to.equal(200);
  });
});