const q = require("q");
const ProfileModel = include("domain/models/profile");
const ProfileEntity = include("domain/entities/profile");
module.exports = async (profileId, needPassword = false) => {
  let profile = await ProfileModel.findOne({ _id: profileId });
  if (profile) {
    return new ProfileEntity(profile, needPassword);
  } else {
    return null;
  }
};

//const getProfileByUsername = require("./get-profile-by-username");
