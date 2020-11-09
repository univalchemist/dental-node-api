---
to: modules/<%= name %>/controllers/index.js
---
const { load } = include("common/utils");

module.exports = load(__dirname)