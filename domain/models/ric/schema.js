const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  image: String,
  statement: String,
},
  {
    timestamps: true,
  }
);
