const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const createCategory = include("test/helper/category/create-category");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Category controller] Get Category", () => {
  it("Should Get Category and return code 200", async () => {
    const category = await createCategory();
    let testData = {
      name: category.name,
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/category/get-category")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });

  it("Should Get Category and return code 200 - body null", async () => {
    await createCategory();
    let testData = {
      name: "Test Category",
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/category/get-category")
      .send(testData)
      .set(authHeader(profile));
    const { category } = response.body.data;
    expect(response.status).to.eq(200);
    expect(category).to.eq(null);
  });
});


// require("./get-category");
// require("./modules/category/controllers/get-category");
