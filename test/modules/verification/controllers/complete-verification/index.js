

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

describe("[Verification controller] Complete Verification", () => {
  it("Should Complete Verification and return code 200", async () => {
    let testData = {

    }
    let trainer = await createTrainerWithTeam();
    const response = await request(server)
      .post("/api/verification/complete-verification")
      .send(testData)
      .set(authHeader(trainer));;
    expect(response.status).to.eq(200);
  });
});


require("./complete-verification");
require("./modules/verification/controllers/complete-verification");
