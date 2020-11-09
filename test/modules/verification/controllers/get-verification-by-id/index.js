

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

describe("[Verification controller] Get Verification By Id", () => {
  it("Should Get Verification By Id and return code 200", async () => {
    let testData = {

    }
    let trainer = await createTrainerWithTeam();
    const response = await request(server)
      .post("/api/verification/get-verification-by-id")
      .send(testData)
      .set(authHeader(trainer));;
    expect(response.status).to.eq(200);
  });
});


require("./get-verification-by-id");
require("./modules/verification/controllers/get-verification-by-id");
