const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const { sleep } = include("common/helper/generalHelper");
const { authHeader } = include("test/helper/auth");
const _ = require("lodash");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Profile controller] Change Password", () => {
  it("Should Change Password and return code 200", async () => {
    let profile = await createProfile();
    let testData = {
      password: "newpassword",
      oldPassword: "samplepassword",
    };
    const response = await request(server)
      .post("/api/profile/change-password")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);

    const responseLogin = await request(server)
      .post("/api/auth/sign-in")
      .send({ email: profile.email, password: testData.password });
    expect(responseLogin.status).to.eq(200);
  });

  it("Should Change Password and return code 400", async () => {
    let profile = await createProfile();
    let testData = {
      password: "newpassword",
      oldPassword: "wrongpassword",
    };
    const response = await request(server)
      .post("/api/profile/change-password")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(400);
  });
});

//
// require("./change-password");
// require("./modules/profile/controllers/change-password");
