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
const createProduct = include("test/helper/product/create-product");
const createGroup =  include("test/helper/group/create-group");
const { parseObjectId } = include("common/helper/generalHelper");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Product controller] Edit Product", () => {
  it("Should Edit Product and return code 200", async () => {
    const product = await createProduct();
    const brand = await createBrand();
    const category = await createCategory();
    const subCategory = await createSubCategory();
    const pao = await createPao();
    const ric = await createRic();
    const group = await createGroup();
    const name = "Name" + new Date().getTime();
    let profile = await createProfile();
    const response = await request(server)
      .put(`/api/product/edit-product/${product._id}`)
      .field("name", name)
      .field("brandName", parseObjectId(brand._id))
      .field("size", 30)
      .field("unit", "ml")
      .field("quantity", 40)
      .field("category", parseObjectId(category._id))
      .field("subCategory", parseObjectId(subCategory._id))
      .field("pao", parseObjectId(pao._id))
      .field("ric", parseObjectId(ric._id))
      .field("icon", "url icon")
      .field("group", parseObjectId(group._id))
      .attach('image', 'test/helper/image/product-test.jpeg')
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
    expect(response.body.data.success).to.eq(true);
  });

  it("Should Edit Product with brandName and return code 200", async () => {
    const name = "Name" + new Date().getTime();
    const category = await createCategory();
    const subCategory = await createSubCategory();
    const pao = await createPao();
    const ric = await createRic();
    let profile = await createProfile();
    const brand = await createBrand();
    const product = await createProduct();
    const response = await request(server)
      .put(`/api/product/edit-product/${product._id}`)
      .field("name", name)
      .field("brandName", brand.name)
      .field("size", 80)
      .field("unit", "ml")
      .field("quantity", 90)
      .field("category", parseObjectId(category._id))
      .field("subCategory", parseObjectId(subCategory._id))
      .field("pao", parseObjectId(pao._id))
      .field("ric", parseObjectId(ric._id))
      .field("icon", "url icon")
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });

  it("Should Add New Product with brand._id and return code 200", async () => {
    const product = await createProduct();
    const brand = await createBrand();
    const category = await createCategory();
    const subCategory = await createSubCategory();
    const pao = await createPao();
    const ric = await createRic();
    const name = "Name" + new Date().getTime();
    let profile = await createProfile();
    const response = await request(server)
      .put(`/api/product/edit-product/${product._id}`)
      .field("name", name)
      .field("brandName", parseObjectId(brand._id))
      .field("size", 50)
      .field("unit", "ml")
      .field("quantity", 60)
      .field("category", parseObjectId(category._id))
      .field("subCategory", parseObjectId(subCategory._id))
      .field("pao", parseObjectId(pao._id))
      .field("ric", parseObjectId(ric._id))
      .field("icon", "url icon")
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });
});

// require("./edit-product");
// require("./modules/product/controllers/edit-product");
