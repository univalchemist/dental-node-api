const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const { createTrainerWithTeam, createClient } = include(
  "test/bootstrap/profile"
);
const { sleep } = include("common/helper/generalHelper");

const { expect } = chai;
chai.should();
chai.use(things);

describe("[Profile controller] Get Profile By Username", () => {
  it("Should Get Profile By Username and return code 200", async () => {
    let testData = {};
    let trainer = await createTrainerWithTeam();
    const response = await request(server)
      .post("/api/profile/get-profile-by-username")
      .send(testData);

    expect(response.status).to.eq(200);
  });
});
