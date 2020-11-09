const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const createProduct = include("test/helper/product/create-product");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Product controller] Start Use Product", () => {
  it("Should Start Use Product and return code 200", async () => {
    const product = await createProduct();
    let testData = {
      dateStartUse: "2020-12-24"
    };
    let profile = await createProfile();
    const response = await request(server)
      .put(`/api/product/${product._id}/start-use-product`)
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });
  it("Should Start Use Product and return code 400 if wrong format date ISO", async () => {
    const product = await createProduct();
    let testData = {
      dateStartUse: "2020-24-12"
    };
    let profile = await createProfile();
    const response = await request(server)
      .put(`/api/product/${product._id}/start-use-product`)
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(400);
  });
});


// require("./start-use-product");
// require("./modules/product/controllers/start-use-product");
