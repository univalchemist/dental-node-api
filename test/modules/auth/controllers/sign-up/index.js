const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const { expect } = chai;
chai.should();
chai.use(things);
const _ = require("lodash");
const generateRandomEmail = include("test/helper/common/generate-random-email");
const createProfile = include("test/helper/profile/create-profile");

describe("[Auth controller] Sign Up", () => {
  it("Should Sign Up and return code 200 and able to login", async () => {
    let testData = {
      email: await generateRandomEmail(),
      username: await generateRandomEmail(),
      firstName: "First Name",
      lastName: "Last Name",
      password: "SomePassword",
      avatar: "Should Be Fine"
    };
    const response = await request(server)
      .post("/api/auth/sign-up")
      .send(testData);
    expect(response.status).to.eq(200);

    const responseLogin = await request(server)
      .post("/api/auth/sign-in")
      .send(_.pick(testData, ["email", "password"]));
    expect(responseLogin.status).to.eq(200);
  });

  it("Should Not Sign Up and return code 400 if using existed email", async () => {
    let profile = await createProfile();
    let testData = {
      email: profile.email,
      username: await generateRandomEmail(),
      firstName: "First Name",
      lastName: "Last Name",
      password: "SomePassword",
      avatar: "Should Be Fine"
    };
    const response = await request(server)
      .post("/api/auth/sign-up")
      .send(testData);
    expect(response.status).to.eq(400);
  });
});
