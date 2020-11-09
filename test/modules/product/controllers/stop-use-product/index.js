const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const createProduct = include("test/helper/product/create-product");
const { sleep } = include("common/helper/generalHelper");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Product controller] Stop Use Product", () => {
  it("Should Stop Use Product and return code 200", async () => {
    const product = await createProduct();
    let testData = {
      dateStopUse: "2020-12-24"
    };
    let profile = await createProfile();
    const response = await request(server)
      .put(`/api/product/${product._id}/stop-use-product`)
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });
  it("Should Start Use Product and return code 400 if wrong format date ISO", async () => {
    const product = await createProduct();
    let testData = {
      dateStopUse: "2020-24-12"
    };
    let profile = await createProfile();
    const response = await request(server)
      .put(`/api/product/${product._id}/stop-use-product`)
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(400);
  });
});


// require("./stop-use-product");
// require("./modules/product/controllers/stop-use-product");
