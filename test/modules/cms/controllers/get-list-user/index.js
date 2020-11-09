const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createAdmin = include("test/helper/admin/create-admin");
const { authHeader } = include("test/helper/auth");
const { createProfile } = include("test/helper/profile");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[Cms controller] Get List User", () => {
  it("Should Get List User and return code 200 without page, per page and data user empty", async () => {
    const admin = await createAdmin();
    const response = await request(server)
      .get("/api/cms/get-list-user")
      .set(authHeader(admin));
    expect(response.status).to.eq(200);
  });

  it("Should Get List User and return code 200 without page, per page", async () => {
    await createProfile();
    const admin = await createAdmin();
    const response = await request(server)
      .get("/api/cms/get-list-user")
      .set(authHeader(admin));
    expect(response.status).to.eq(200);
  });

  it("Should Get List User return code 200 and 1 result with page, per page", async () => {
    await createProfile();
    await createProfile();
    const admin = await createAdmin();
    const response = await request(server)
      .get("/api/cms/get-list-user?page=1&perPage=1")
      .set(authHeader(admin));
    expect(response.status).to.eq(200);
    expect(response.body.data.listUser.length).to.eq(1);
  });

  it("Should Get List User return code 200 and 2 result with page, per page", async () => {
    await createProfile();
    await createProfile();
    const admin = await createAdmin();
    const response = await request(server)
      .get("/api/cms/get-list-user?page=1&perPage=2")
      .set(authHeader(admin));
    expect(response.status).to.eq(200);
    expect(response.body.data.listUser.length).to.eq(2);
  });

  it("Should Get List User and return code 401 without auth", async () => {
    await createProfile();
    const response = await request(server)
      .get("/api/cms/get-list-user?page=1&perPage=1");
    expect(response.status).to.eq(401);
  });

});

//
// require("./get-list-user");
// require("./modules/cms/controllers/get-list-user");
