---
to: test/modules/<%= h.changeCase.paramCase(module) %>/controllers/<%= h.changeCase.paramCase(name) %>/index.js
---


const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const createProfile = include("test/helper/profile/create-profile");
const { sleep } = include("common/helper/generalHelper");
const { authHeader } = include("test/helper/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[<%= h.changeCase.title(module) %> controller] <%= h.changeCase.title(name) %>", () => {
  it("Should <%= h.changeCase.title(name) %> and return code 200", async () => {
    let testData = {

    }
    let profile = await createProfile();
    const response = await request(server)
      .delete("/api/<%= h.changeCase.paramCase(module) %>/<%= h.changeCase.paramCase(name) %>")
      .send(testData)
      .set(authHeader(profile));
    expect(response.status).to.eq(200);
  });
});


require("./<%= h.changeCase.paramCase(name) %>");
require("./modules/<%= h.changeCase.paramCase(module) %>/controllers/<%= h.changeCase.paramCase(name) %>");
