---
to: modules/<%= h.changeCase.paramCase(name) %>/controller.js
---

const service = require("./service");
const controllers = require("./controllers");

class <%= h.changeCase.pascalCase(name) %>Controller {

}

module.exports = <%= h.changeCase.pascalCase(name) %>Controller;
