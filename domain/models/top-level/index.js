const mongoose = require('mongoose');
const Schema = require('./schema');

module.exports = mongoose.model('top-level', Schema);
