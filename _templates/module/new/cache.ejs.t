---
to: modules/<%= h.changeCase.paramCase(name) %>/cache.js
---

const caches = require("./caches");

class <%= h.changeCase.pascalCase(name) %>CacheService {
  
}
module.exports = <%= h.changeCase.pascalCase(name) %>CacheService;
