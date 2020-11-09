const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = include("common/config/");
const Schema = require("./schema");

Schema.pre("save", onProfilePreSave);
Schema.methods = {
  isCorrectPassword
};

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

function isCorrectPassword(password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("admin", Schema);
