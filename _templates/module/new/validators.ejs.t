---
to: modules/<%= name %>/validators/index.js
---
const { load } = include("common/utils");

module.exports = load(__dirname)