const q = require("q");
const ProfileModel = include("domain/models/profile");

module.exports = async (profile, password) => {
  return ProfileModel.updateOne({ _id: profile }, { $set: { password } });
};

//const changeUserPassword = require("./change-user-password");
