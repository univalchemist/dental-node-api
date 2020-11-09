---
to: modules/<%= h.changeCase.paramCase(name) %>/repository.js
---

const repositories = require("./repositories");

class <%= h.changeCase.pascalCase(name) %>Repository {
  
}
module.exports = <%= h.changeCase.pascalCase(name) %>Repository;
