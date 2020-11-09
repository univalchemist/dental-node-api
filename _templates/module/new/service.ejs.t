---
to: modules/<%= h.changeCase.paramCase(name) %>/service.js
---

const services = require("./services");
const validator = require("./validator");
const repository = require("./repository");
const cacheService = require("./cache");

class <%= h.changeCase.pascalCase(name) %>Service {

}
module.exports = <%= h.changeCase.pascalCase(name) %>Service;
