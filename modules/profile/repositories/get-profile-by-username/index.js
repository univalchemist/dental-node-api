const q = require("q");
const ProfileModel = include("domain/models/profile");
const ProfileEntity = include("domain/entities/profile");
module.exports = async (username, needPassword) => {
  let profile = await ProfileModel.findOne({ username });
  if (profile) {
    return new ProfileEntity(profile, needPassword);
  } else {
    return null;
  }
};

//const getProfileByUsername = require("./get-profile-by-username");
