const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const createBrand = include("test/helper/brand/create-brand");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Brand controller] Check Exist Name", () => {
  it("Should Check Exist Name and return true", async () => {
    const brand = await createBrand();
    let testData = {
      name: brand.name,
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/brand/check-exist-name")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
    const { isExist } = response.body.data;
    expect(isExist).to.eq(true);
  });
  it("Should Check Exist Name and return false", async () => {
    await createBrand();
    let testData = {
      name: "sample data"
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/brand/check-exist-name")
      .send(testData)
      .set(authHeader(profile));
    console.log(response.body);
    expect(response.status).to.eq(200);
    const { isExist } = response.body.data;
    expect(isExist).to.eq(false);
  });
});


// require("./check-exist-name");
// require("./modules/brand/controllers/check-exist-name");
