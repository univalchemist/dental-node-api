

const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const { sleep } = include("common/helper/generalHelper");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Auth controller] Forgot Password", () => {
  it("Should Forgot Password and return code 200", async () => {
    let testData = {

    }
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/auth/forgot-password")
      .send(testData)
      .set(authHeader(profile));;
    expect(response.status).to.eq(200);
  });
});


require("./forgot-password");
require("./modules/auth/controllers/forgot-password");
