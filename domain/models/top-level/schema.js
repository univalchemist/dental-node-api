const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  image: String,
  category: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "category"
  }]
});
