---
to: modules/<%= name %>/caches/index.js
---
const { load } = include("common/utils");

module.exports = load(__dirname)
