const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const { sleep } = include("common/helper/generalHelper");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Group controller] Check Is Exist Group", () => {
  it("Should Check Is Exist Group and return code 200", async () => {
    let testData = {

    }
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/group/check-is-exist-group")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });
});


require("./check-is-exist-group");
require("./modules/group/controllers/check-is-exist-group");
