const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const { createProfile } = include("test/helper/profile");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Auth controller] Sign In", () => {
  it("Should Sign In With Email and return code 200", async () => {
    let user = await createProfile();
    const response = await request(server)
      .post("/api/auth/sign-in")
      .send({
        email: user.email,
        password: "samplepassword"
      });
    expect(response.status).to.eq(200);

    const response2 = await request(server)
      .post("/api/auth/sign-in")
      .send({
        email: user.email,
        username: "",
        password: "samplepassword"
      });
    expect(response2.status).to.eq(200);
  });
  it("Should Sign In With Username and return code 200", async () => {
    let user = await createProfile();
    const response = await request(server)
      .post("/api/auth/sign-in")
      .send({
        username: user.username,
        password: "samplepassword"
      });

    expect(response.status).to.eq(200);
    const response2 = await request(server)
      .post("/api/auth/sign-in")
      .send({
        username: user.username,
        email: "",
        password: "samplepassword"
      });

    expect(response2.status).to.eq(200);
  });
  it("Should not Sign In and return code 400 with wrong password", async () => {
    let user = await createProfile();
    const response = await request(server)
      .post("/api/auth/sign-in")
      .send({
        username: user.username,
        password: "wrongpassword"
      });

    expect(response.status).to.eq(400);
  });
  it("Should not Sign In and return code 400", async () => {
    const response = await request(server)
      .post("/api/auth/sign-in")
      .send({
        email: "random",
        password: "samplepassword"
      });

    expect(response.status).to.eq(400);
  });
});
