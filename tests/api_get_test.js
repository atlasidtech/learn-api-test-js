const { expect } = require('chai');
const chai = require('chai');
chai.use(require('chai-json-schema'));
const api = require('../page_objects/api_get_request');
const schema = require('../schema/user_list_schema.json')

describe('@smoke @regression user', () => {
  it(`@get user success get user list data`, async () => {
    const response = await api.getUserList();
    expect(response.status).to.equal(200);
  });

  it(`@deep assert`, async () => {
    const response = await api.getUserList();
    expect(response.status).to.equal(200);
    expect(response.body.data[0].last_name).to.equal('Bluth')
  });

  it(`@schema assert`, async () => {
    const response = await api.getUserList();
    expect(response.status).to.equal(200);
    expect(response.body).to.be.jsonSchema(schema);
  });
});
