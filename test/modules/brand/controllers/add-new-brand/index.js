const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const { authHeader } = include("test/helper/auth");
const createBrand = include("test/helper/brand/create-brand");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Brand controller] Add New Brand", () => {
  it("Should Add New Brand and return code 200", async () => {
    const name = 'T' + new Date().getTime();
    let testData = {
      name: name
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/brand/add-new-brand")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });

  it("Should Add New Brand with exist brand and return code 400", async () => {
    const brand = createBrand();
    let testData = {
      name: brand.name,
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/brand/add-new-brand")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(400);
  });
});


// require("./add-new-brand");
// require("./modules/brand/controllers/add-new-brand");
