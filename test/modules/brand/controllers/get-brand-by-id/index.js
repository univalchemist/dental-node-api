const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const createBrand = include("test/helper/brand/create-brand");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Brand controller] Get Brand By Id", () => {
  // it("Should Get Brand By Id and return code 200", async () => {
  //   const brand = await createBrand();
  //   let testData = {
  //     id: brand._id
  //   };
  //   let profile = await createProfile();
  //   const response = await request(server)
  //     .post("/api/brand/get-brand-by-id")
  //     .send(testData)
  //     .set(authHeader(profile));
  //   console.log(response.body);
  //   expect(response.status).to.eq(200);
  // });
});


// require("./get-brand-by-id");
// require("./modules/brand/controllers/get-brand-by-id");
