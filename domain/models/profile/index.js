const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = include("common/config/");

const Schema = require("./schema");
Schema.pre("save", onProfilePreSave);
Schema.pre("updateOne", onProfilePreSave);

function onProfilePreSave(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(config.SALT, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, async (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
}

Schema.index({
  email: 1
});

module.exports = mongoose.model("profile", Schema);
