const { expect } = require('chai');
const supertest = require('supertest');

const api = supertest('https://reqres.in/api');

const path = '/users';

const postData = {
  "name": "mandra",
  "job": "blezisky"
}

const putData = {
  "name": "rano",
  "job": "karno"
}

function getUserList() {
  return api.get(path)
    .query({ page: 1 })
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');
}

function postUser(bodyPostData) {
  return api.post(path + `/2`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(bodyPostData);
}

function putUser(bodyPutData) {
  return api.put(path + `/2`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(bodyPutData);
}

function deleteUser() {
  return api.delete(path + `/2`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');
}

describe('@get user', () => {
  it(`@get user success get user list data`, async () => {
    const response = await getUserList();
    expect(response.status).to.equal(200);
  });
});

describe('@post user', () => {
  it(`@post user success post user data`, async () => {
    const response = await postUser(postData);
    expect(response.status).to.equal(201);
  });
});

describe('@put user', () => {
  it(`@put user success put user data`, async () => {
    const response = await putUser(putData);
    expect(response.status).to.equal(200);
  });
});

describe('@delete user', () => {
  it(`@delete user success put user data`, async () => {
    const response = await deleteUser();
    expect(response.status).to.equal(204);
  });
});