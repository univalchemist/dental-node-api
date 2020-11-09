---
to: modules/<%= h.changeCase.paramCase(name) %>/validator.js
---

const validators = require("./validators");

class <%= h.changeCase.pascalCase(name) %>Validator {
  
}
module.exports = <%= h.changeCase.pascalCase(name) %>Validator;
