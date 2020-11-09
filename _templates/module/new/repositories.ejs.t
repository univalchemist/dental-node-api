---
to: modules/<%= name %>/repositories/index.js
---
const { load } = include("common/utils");

module.exports = load(__dirname)