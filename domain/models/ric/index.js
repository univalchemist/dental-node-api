const mongoose = require('mongoose');
const Schema = require('./schema');

Schema.index({
  name: 1,
});

module.exports = mongoose.model('ric', Schema);
