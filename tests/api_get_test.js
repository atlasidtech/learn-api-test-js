const { expect } = require('chai');
const api = require('../page_objects/api_get_request');

describe('@get user', () => {
  it(`@get user success get user list data`, async () => {
    const response = await api.getUserList();
    expect(response.status).to.equal(200);
  });
});
