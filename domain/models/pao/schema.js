const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: String,
    image: String,
    statement: String,
  },
  {
    timestamps: true,
  }
);
