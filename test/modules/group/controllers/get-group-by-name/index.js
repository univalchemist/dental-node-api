const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const { sleep } = include("common/helper/generalHelper");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Group controller] Get Group By Name", () => {
  it("Should Get Group By Name and return code 200", async () => {
    let testData = {

    }
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/group/get-group-by-name")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });
});


require("./get-group-by-name");
require("./modules/group/controllers/get-group-by-name");
