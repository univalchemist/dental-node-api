const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const createProduct = include("test/helper/product/create-product");
const getProductById = include("test/helper/product/get-product-by-id");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Product controller] Add Archive", () => {
  it("Should Add Archive and return code 200", async () => {
    const product = await createProduct();
    let profile = await createProfile();
    const response = await request(server)
      .put(`/api/product/${product._id}/archive`)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
    const productAfter = await getProductById(product._id);
    expect(productAfter.isArchive).to.eq(true);
  });
});


// require("./archive");
// require("./modules/product/controllers/archive");
