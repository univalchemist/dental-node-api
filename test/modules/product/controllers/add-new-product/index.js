const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const { authHeader } = include("test/helper/auth");
const createCategory = include("test/helper/category/create-category");
const createSubCategory = include("test/helper/sub-category/create-sub-category");
const createPao = include("test/helper/pao/create-pao");
const createRic = include("test/helper/ric/create-ric");
const createBrand = include("test/helper/brand/create-brand");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Product controller] Add New Product", () => {
  it("Should Add New Product and return code 200", async () => {
    const category = await createCategory();
    const subCategory = await createSubCategory();
    const pao = await createPao();
    const ric = await createRic();
    const name = "Name" + new Date().getTime();
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/product/add-new-product")
      .field("name", name)
      .field("brandName", "Brand Name Test")
      .field("size", 20)
      .field("unit", "ml")
      .field("quantity", 10)
      .field("category", String(category._id))
      .field("subCategory", String(subCategory._id))
      .field("pao", String(pao._id))
      .field("ric", String(ric._id))
      .field("icon", "url icon")
      .attach('image', 'test/helper/image/product-test.jpeg')
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
    const product = response.body.data.product;
    expect(Object.keys(product).length).to.greaterThan(0);
  });

  it("Should Add New Product without image and return code 200", async () => {
    const category = await createCategory();
    const subCategory = await createSubCategory();
    const pao = await createPao();
    const ric = await createRic();
    const name = "Name" + new Date().getTime();
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/product/add-new-product")
      .field("name", name)
      .field("brandName", "Brand Name Test")
      .field("size", 20)
      .field("unit", "ml")
      .field("quantity", 10)
      .field("category", String(category._id))
      .field("subCategory", String(subCategory._id))
      .field("pao", String(pao._id))
      .field("ric", String(ric._id))
      .field("icon", "url icon")
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
    const product = response.body.data.product;
    expect(Object.keys(product).length).to.greaterThan(0);
  });

  it("Should Add New Product without name and return code 400 and body null", async () => {
    const category = await createCategory();
    const subCategory = await createSubCategory();
    const pao = await createPao();
    const ric = await createRic();
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/product/add-new-product")
      .field("brandName", "Brand Name Test")
      .field("size", 20)
      .field("unit", "ml")
      .field("quantity", 10)
      .field("category", String(category._id))
      .field("subCategory", String(subCategory._id))
      .field("pao", String(pao._id))
      .field("ric", String(ric._id))
      .field("icon", "url icon")
      .set(authHeader(profile));
    expect(response.status).to.eq(400);
  });

  it("Should Add New Product with exist brandName and return code 200", async () => {
    const brand = await createBrand();
    const category = await createCategory();
    const subCategory = await createSubCategory();
    const pao = await createPao();
    const ric = await createRic();
    const name = "Name" + new Date().getTime();
    let profile = await createProfile();
    const response = await request(server)
      .post("/api/product/add-new-product")
      .field("name", name)
      .field("brandName", brand.name)
      .field("size", 20)
      .field("unit", "ml")
      .field("quantity", 10)
      .field("category", String(category._id))
      .field("subCategory", String(subCategory._id))
      .field("pao", String(pao._id))
      .field("ric", String(ric._id))
      .field("icon", "url icon")
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });
});


// require("./add-new-product");
// require("./modules/product/controllers/add-new-product");
