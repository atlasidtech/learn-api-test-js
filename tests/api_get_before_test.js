const { espect } = require('chai');
const api = require('../page_objects/api_get_request');

describe('@beforetest user', () => {
  let userId;
  before(async () => {
    console.log('this is before test')
    const response = await api.getUserList();
    espect(response.status).to.equal(200);
    userId = response.body.data[1].id;
  });

  it(`@get user success get user list data`, async () => {
    const response = await api.getSingleUser(userId);
    espect(response.status).to.equal(200);
  });
});
