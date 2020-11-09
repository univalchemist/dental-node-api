const mongoose = require('mongoose');
const config = include("common/config/");

module.exports = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  description: String,
  icon: String,
  brandName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "brand",
    required: true,
  },
  size: Number,
  unit: {
    type: String,
    enum: config.UNIT_TYPE,
  },
  topLevel:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "top-level"
  }],
  quantity: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
    required: true,
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sub-categories"
  },
  PAO: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "pao"
  },
  RIC: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ric"
  },
  dateOpen: Date,
  expired: Date,
  dateStartUse: Date,
  dateStartEnd: Date,
  isDailyUse: Boolean,
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "groups"
  },
  isArchive: {
    type: Boolean,
    default: false,
  },
});
