const mongoose = require("mongoose");

module.exports = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: String,
    topLevel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "top-level"
    },
    recycling: String,
    tip: String,
    subCategory: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories"
    }],
  },
  // additional configuration
  {
    timestamps: true,
  }
);
