const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  name: String,
  custom: Boolean,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "brand",
  },
  isDailyUse: Boolean,
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "groups",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "profile",
  }
},
  // additional configuration
  {
    timestamps: true
  }
);
