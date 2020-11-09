const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const { sleep } = include("common/helper/generalHelper");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Sub Category controller] Add New Sub Category", () => {
  it("Should Add New Sub Category and return code 200", async () => {
    const name = 'T' + new Date().getTime();
    let testData = {
      name,
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/sub-category/add-new-sub-category")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });
});


// require("./add-new-sub-category");
// require("./modules/sub-category/controllers/add-new-sub-category");
