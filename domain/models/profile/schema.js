const mongoose = require("mongoose");
const config = include("common/config");

module.exports = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 6
    },
    avatar: String,
    fbId: String,
    googleId: String,
    identifier: {
      type: String,
      unique: true,
    },
    signedVia: {
      type: String,
      required: true,
      enum: config.ACCOUNT_SIGNED_VIA,
    },
    status: {
      type: String,
      enum: config.ACCOUNT_STATUS,
      default: config.ACCOUNT_STATUS_ACTIVE
    },
    typeAccount: {
      type: String,
      enum: config.ACCOUNT_TYPE,
      default: config.ACCOUNT_TYPE_FREE
    },
  },
  // additional configuration
  {
    timestamps: true
  }
);
