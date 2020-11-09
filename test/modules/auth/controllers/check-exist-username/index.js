const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Auth controller] Check Exist Username", () => {
  it("Should Check Exist Username and return code 200", async () => {
    let testData = {
      username: "quanky"
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/auth/check-exist-username")
      .send(testData);
    expect(response.status).to.eq(200);
  });
});
