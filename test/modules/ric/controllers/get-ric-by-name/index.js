const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const createRic = include("test/helper/ric/create-ric");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Ric controller] Get Ric By Name", () => {
  it("Should Get Ric By Name and return code 200", async () => {
    const ric = await createRic();
    let testData = {
      name: ric.name
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/ric/get-ric-by-name")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });

  it("Should Get Ric By Name and return code 200 - body null", async () => {
    await createRic();
    let testData = {
      name: "simple ric"
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/ric/get-ric-by-name")
      .send(testData)
      .set(authHeader(profile));
    console.log(response.body);
    expect(response.status).to.eq(200);
  });
});


// require("./get-ric-by-name");
// require("./modules/ric/controllers/get-ric-by-name");
