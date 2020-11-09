---
to: test/modules/<%= h.changeCase.paramCase(module) %>/controllers/<%= h.changeCase.paramCase(name) %>/index.js
---


const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const { createTrainerWithTeam, createClient } = include(
  "test/bootstrap/profile"
);
const { sleep } = include("common/helper/generalHelper");
const { authHeader } = include("test/bootstrap/auth");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[<%= h.changeCase.title(module) %> controller] <%= h.changeCase.title(name) %>", () => {
  it("Should <%= h.changeCase.title(name) %> and return code 200", async () => {
    let testData = {

    }
    let trainer = await createTrainerWithTeam();
    const response = await request(server)
      .post("/api/<%= h.changeCase.paramCase(module) %>/<%= h.changeCase.paramCase(name) %>")
      .send(testData)
      .set(authHeader(trainer));;
    expect(response.status).to.eq(200);
  });
});


require("./<%= h.changeCase.paramCase(name) %>");
require("./modules/<%= h.changeCase.paramCase(module) %>/controllers/<%= h.changeCase.paramCase(name) %>");
