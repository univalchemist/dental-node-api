const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const { authHeader } = include("test/helper/auth");
const generateRandomEmail = include("test/helper/common/generate-random-email");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Profile controller] Edit Profile", () => {
  it("Should Edit Profile with empty body and return code 200", async () => {
    let testData = {};
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/profile/edit-profile")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });

  it("Should Edit Profile and return code 200", async () => {
    let email = await generateRandomEmail();
    let testData = {
      "firstName": "edit first name",
      "lastName": "edit last name",
      "email": 'T' + email,
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/profile/edit-profile")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);

    const profileUpdate = await request(server)
      .get("/api/profile")
      .send({email: testData.email})
      .set(authHeader(profile));
    expect(profileUpdate.body.data.email).to.eq(testData.email.trim().toLowerCase());
  });

  it("Should Edit Profile with email used and return code 400", async () => {
    let profile = await createProfile();
    let testData = {
      "firstName": "edit first name",
      "lastName": "edit last name",
      "email": profile.email,
    };
    const response = await request(server)
      .post("/api/profile/edit-profile")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(400);
  });
});


// require("./edit-profile");
// require("./modules/profile/controllers/edit-profile");
