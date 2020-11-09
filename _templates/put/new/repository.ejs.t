---
to: modules/<%= h.changeCase.paramCase(module) %>/repositories/<%= h.changeCase.paramCase(name) %>/index.js
---

const q = require("q");

module.exports = async (params) => {
  const defer = q.defer();
  try {
    defer.resolve({success: true});
  } catch (err) {
    log.error("[REPOSITORY][EXCEPTION][<%= h.changeCase.title(name) %>] error", err);
    defer.resolve({success: false});
  }
  return defer.promise;
};



static async <%= h.changeCase.camel(name) %>(params) {
  return repositories.<%= h.changeCase.camel(name) %>(params);
}


//const <%= h.changeCase.camel(name) %> = require("./<%= h.changeCase.paramCase(name) %>");
