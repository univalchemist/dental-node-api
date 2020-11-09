---
to: test/helper/<%= module %>/<%= h.changeCase.paramCase(name) %>/index.js
---

const Profile = include("domain/models/profile");

module.exports = async (data) => {

  return data;
};


// const <%= h.changeCase.camel(name) %> = include("test/helper/<%= module %>/<%= h.changeCase.paramCase(name) %>");
