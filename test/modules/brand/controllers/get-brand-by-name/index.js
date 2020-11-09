const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const { sleep } = include("common/helper/generalHelper");
const createProfile = include("test/helper/profile/create-profile");
const { authHeader } = include("test/helper/auth");
const createBrand = include("test/helper/brand/create-brand");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Brand controller] Get Brand By Name", () => {
  it("Should Get Brand By Name and return code 200", async () => {
    const band = await createBrand();
    let testData = {
      name: band.name,
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/brand/get-brand-by-name")
      .send(testData)
      .set(authHeader(profile));
    const { brand } = response.body.data;
    expect(response.status).to.eq(200);
    expect(brand).have.to.property('name');
    expect(brand.name).to.eq(testData.name);
  });

  it("Should Get Brand By Name and return code 200 - brand null", async () => {
    await createBrand();
    let testData = {
      name: "Sample name",
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/brand/get-brand-by-name")
      .send(testData)
      .set(authHeader(profile));
    const { brand } = response.body.data;
    expect(response.status).to.eq(200);
    expect(brand).to.eq(null);
  });
});


// require("./get-brand-by-name");
// require("./modules/brand/controllers/get-brand-by-name");
