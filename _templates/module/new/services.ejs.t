---
to: modules/<%= name %>/services/index.js
---
const { load } = include("common/utils");

module.exports = load(__dirname)