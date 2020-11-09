

const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const { createTrainerWithTeam, createClient } = include(
  "test/bootstrap/profile"
);
const { sleep } = include("common/helper/generalHelper");
const { authHeader } = include("test/bootstrap/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Profile controller] Get Profile By Email", () => {
  it("Should Get Profile By Email and return code 200", async () => {
    let testData = {

    }
    let trainer = await createTrainerWithTeam();
    const response = await request(server)
      .post("/api/profile/get-profile-by-email")
      .send(testData)
      .set(authHeader(trainer));;
    expect(response.status).to.eq(200);
  });
});


require("./get-profile-by-email");
require("./modules/profile/controllers/get-profile-by-email");
