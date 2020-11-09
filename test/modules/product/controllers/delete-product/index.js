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

describe("[Product controller] Delete Product", () => {
  it("Should Delete Product and return code 200", async () => {
    const product = await createProduct();
    let profile = await createProfile();
    const response = await request(server)
      .delete(`/api/product/delete-product/${product._id}`)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
    const productAfter = await getProductById(product._id);
    expect(productAfter).to.eq(null);
  });

  it("Should Delete Product and return code 400 if product is not found", async () => {
    let profile = await createProfile();
    const id = "5f74ae85d8740736b9f68472";
    const response = await request(server)
      .delete(`/api/product/delete-product/${id}`)
      .set(authHeader(profile));
    expect(response.status).to.eq(400);
  });
});


// require("./delete-product");
// require("./modules/product/controllers/delete-product");
