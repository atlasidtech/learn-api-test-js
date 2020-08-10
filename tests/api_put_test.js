const { expect } = require('chai');
const api = require('../page_objects/api_put_request');

const putData = {
  "name": "rano",
  "job": "karno"
}
 
describe('@put user', () => {
  it(`@put user success put user data`, async () => {
    const response = await api.putUser(putData);
    expect(response.status).to.equal(200);
  });
});