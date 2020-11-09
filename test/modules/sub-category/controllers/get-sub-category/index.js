const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const createSubCategory = include("test/helper/sub-category/create-sub-category");
const { sleep } = include("common/helper/generalHelper");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Sub Category controller] Get Sub Category", () => {
  it("Should Get Sub Category and return code 200", async () => {
    const subCategory = await createSubCategory();
    let testData = {
      name: subCategory.name,
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/sub-category/get-sub-category")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });

  it("Should Get Sub Category and return code 200 - body null", async () => {
    await createSubCategory();
    let testData = {
      name: "test get category",
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/sub-category/get-sub-category")
      .send(testData)
      .set(authHeader(profile));
    const { subCategory } = response.body.data;
    expect(response.status).to.eq(200);
    expect(subCategory).to.eq(null);
  });
});


// require("./get-sub-category");
// require("./modules/sub-category/controllers/get-sub-category");
