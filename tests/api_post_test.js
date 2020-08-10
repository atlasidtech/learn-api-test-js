const { expect } = require('chai');
const api = require('../page_objects/api_post_request');

const postData = {
  "name": "morpheus",
  "job": "zion resident"
}

describe('@post user', () => {
  it(`@post user success post user data`, async () => {
    const response = await api.postUser(postData);
    expect(response.status).to.equal(201);
  });
});