const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createCategory = include("test/helper/category/create-category");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Category controller] Check Exist Name", () => {
  it("Should Check Exist Name and return true", async () => {
    const category = await createCategory();
    let testData = {
      name: category.name,
    };
    const response = await request(server)
      .post("/api/category/check-exist-name")
      .send(testData);
    const { isExist } = response.body.data;
    expect(response.status).to.eq(200);
    expect(isExist).to.eq(true);
  });

  it("Should Check Exist Name and return true", async () => {
    let testData = {
      name: "Test Category"
    };
    // let profile = await createCategory();
    const response = await request(server)
      .post("/api/category/check-exist-name")
      .send(testData);
    const { isExist } = response.body.data;
    expect(response.status).to.eq(200);
    expect(isExist).to.eq(false);
  });
});


// require("./check-exist-name");
// require("./modules/category/controllers/check-exist-name");
