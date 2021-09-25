const { expect } = require('chai');
const api = require('../page_objects/api_post_request');
const postData = require('../data/post_data.json')

describe('@postdata user', () => {
  it(`@post user success post user data`, async () => {
    const response = await api.postUser(postData);
    expect(response.status).to.equal(201);
  });
});