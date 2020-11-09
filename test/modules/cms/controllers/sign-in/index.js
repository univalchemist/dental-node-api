const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createAdmin = include("test/helper/admin/create-admin");
const { expect } = chai;
chai.should();
chai.use(things);


describe("[Auth controller] Sign Up", () => {
  it("Should Sign In return code 200", async () => {
    let profile = await createAdmin();
    let testData = {
      email: profile.email,
      password: "samplepassword",
    };
    const responseLogin = await request(server)
      .post("/api/cms/sign-in")
      .send(testData);
    expect(responseLogin.status).to.eq(200);
    expect(responseLogin.body.data).to.have.property('token');
  });

  it("Should Not Sign In and return code 400 if wrong email", async () => {
    let testData = {
      email: 'testemail@gmail.com',
      password: "samplepassword",
    };
    const response = await request(server)
      .post("/api/cms/sign-in")
      .send(testData);
    expect(response.status).to.eq(400);
  });

  it("Should Not Sign In and return code 500 if wrong password", async () => {
    let profile = await createAdmin();
    let testData = {
      email: profile.email,
      password: "SomePassword",
    };
    const response = await request(server)
      .post("/api/cms/sign-in")
      .send(testData);
    expect(response.status).to.eq(400);
  });

});

