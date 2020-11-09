const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const { sleep } = include("common/helper/generalHelper");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Product controller] Get Product By Id", () => {
  it("Should Get Product By Id and return code 200", async () => {
    let testData = {

    }
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/product/get-product-by-id")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });
});


require("./get-product-by-id");
require("./modules/product/controllers/get-product-by-id");
