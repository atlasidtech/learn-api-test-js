const { expect } = require('chai');
const supertest = require('supertest');

const api = supertest('https://reqres.in/api');

const path = '/users';

const postData = {
  "name": "morpheus",
  "job": "zion resident"
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
  it(`@get it success get user list data`, async () => {
    const response = await getUserList();
    expect(response.status).to.equal(200);
  });
});

describe('@post user', () => {
  it(`@post it success post user data`, async () => {
    const response = await postUser(postData);
    expect(response.status).to.equal(201);
  });
});

describe('@put user', () => {
  it(`@put it success put user data`, async () => {
    const response = await putUser(putData);
    expect(response.status).to.equal(200);
  });
});

describe('@delete user', () => {
  it(`@delete it success put user data`, async () => {
    const response = await deleteUser();
    expect(response.status).to.equal(204);
  });
});