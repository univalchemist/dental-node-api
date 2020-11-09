const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const createPao = include("test/helper/pao/create-pao")
const { sleep } = include("common/helper/generalHelper");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Pao controller] Get Pao By Name", () => {
  it("Should Get Pao By Name and return code 200", async () => {
    const pao = await createPao();
    let testData = {
      name: pao.name,
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/pao/get-pao-by-name")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });

  it("Should Get Pao By Name and return code 200 and body null", async () => {
    await createPao();
    let testData = {
      name: "test pao",
    };
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/pao/get-pao-by-name")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
    expect(response.body.data.pao).to.eq(null);
  });
});


// require("./get-pao-by-name");
// require("./modules/pao/controllers/get-pao-by-name");
