const q = require("q");
const ProfileModel = include("domain/models/profile");
const ProfileEntity = include("domain/entities/profile");
module.exports = async (email, needPassword) => {
  let profile = await ProfileModel.findOne({ email });
  if (profile) {
    return new ProfileEntity(profile, needPassword);
  } else {
    return null;
  }
};

//const getProfileByEmail = require("./get-profile-by-email");
