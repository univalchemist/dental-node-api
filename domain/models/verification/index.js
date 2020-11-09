const mongoose = require("mongoose");
const Schema = require("./schema");

Schema.index({ profile: 1 });
Schema.index({ token: 1 });
Schema.index({ action: 1 });

module.exports = mongoose.model("verification", Schema);
