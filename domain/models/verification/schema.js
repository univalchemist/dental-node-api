const mongoose = require("mongoose");
const config = include("common/config");
module.exports = new mongoose.Schema(
  {
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "profile",
      required: true
    },
    token: {
      type: String,
      required: true
    },
    status: {
      type: Number,
      default: config.VERIFICATION_STATUS_PENDING
    },
    complete_date: Date,
    action: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
