const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");

const createProfile = include("test/helper/profile/create-profile");
const generateRandomEmail = include("test/helper/common/generate-random-email");

const { expect } = chai;
chai.should();
chai.use(things);

describe("[Auth controller] Check Exist Email", () => {
  it("Should Check Exist Email and return code 200 and true value", async () => {
    let newProfile = await createProfile();
    let testData = {
      email: newProfile.email
    };
    const response = await request(server)
      .post("/api/auth/check-exist-email")
      .send(testData);
    expect(response.status).to.eq(200);
    expect(response.body.data.isExist).to.eq(true);
  });

  it("Should Check Exist Email and return code 200 and false value", async () => {
    let testData = {
      email: await generateRandomEmail()
    };
    const response = await request(server)
      .post("/api/auth/check-exist-email")
      .send(testData);
    expect(response.status).to.eq(200);
    expect(response.body.data.isExist).to.eq(false);
  });
});
