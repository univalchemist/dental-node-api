const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createCategory = include("test/helper/category/create-category");
// const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Category controller] Add New Category", () => {
  it("Should Add New Category and return code 200", async () => {
    let testData = {
      name: "Test Category"
    };
    const response = await request(server)
      .post("/api/category/add-new-category")
      .send(testData);
    expect(response.status).to.eq(200);
  });

  it("Should Add New Category and return code 400 if have category", async () => {
    const category = createCategory();
    let testData = {
      name: category.name,
    };
    const response = await request(server)
      .post("/api/category/add-new-category")
      .send(testData);
    expect(response.status).to.eq(400);
  });
});


// require("./add-new-category");
// require("./modules/category/controllers/add-new-category");
