---
to: test/modules/<%= h.changeCase.paramCase(module) %>/controllers/<%= h.changeCase.paramCase(name) %>/index.js
---

"use strict";
const chai = require("chai");
const things = require("chai-things");
const request = require("supertest");
const { expect } = chai;
chai.should();
chai.use(things);

describe("[<%= h.changeCase.title(module) %> controller] <%= h.changeCase.title(name) %>", () => {
  it("Should <%= h.changeCase.title(name) %> and return code 200", async () => {
    let testData = createTestData()
    const response = await request(server)
      .post("/api/<%= h.changeCase.paramCase(module) %>/<%= h.changeCase.paramCase(name) %>")
      .send(testData);
    expect(response.status).to.eq(200);
  });
});


require("./<%= h.changeCase.paramCase(name) %>");
