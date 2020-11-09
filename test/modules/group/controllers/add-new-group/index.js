const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const createGroup = include("test/helper/group/create-group");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Group controller] Add New Group", () => {
  it("Should Add New Group and return code 200", async () => {
    let testData = {
      name: "T" + new Date().getTime(),
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/group/add-new-group")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });

  it("Should Add New Group and return code 400 if group is exist", async () => {
    const group = await createGroup();
    let testData = {
      name: group.name,
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/group/add-new-group")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(400);
  });
});


// require("./add-new-group");
// require("./modules/group/controllers/add-new-group");
