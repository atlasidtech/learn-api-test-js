const { expect } = require('chai');
const api = require('../page_objects/api_delete_request');

describe('@delete user', () => {
  it(`@delete user success put user data`, async () => {
    const response = await api.deleteUser();
    expect(response.status).to.equal(204);
  });
});