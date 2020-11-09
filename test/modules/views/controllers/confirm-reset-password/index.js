

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

describe("[Views controller] Confirm Reset Password", () => {
  it("Should Confirm Reset Password and return code 200", async () => {
    let testData = {

    }
    let trainer = await createTrainerWithTeam();
    const response = await request(server)
      .post("/api/views/confirm-reset-password")
      .send(testData)
      .set(authHeader(trainer));;
    expect(response.status).to.eq(200);
  });
});


require("./confirm-reset-password");
require("./modules/views/controllers/confirm-reset-password");
