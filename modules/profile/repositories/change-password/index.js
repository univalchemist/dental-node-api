const q = require("q");
const ProfileModel = include("domain/models/profile");

module.exports = async params => {
  const defer = q.defer();
  const { user, body } = params;
  const { password } = body;
  try {
    const profile = await ProfileModel.findOne({ _id: user._id });
    if(profile){
      profile.password = password;
      await profile.save();
      defer.resolve({ isUpdated: true});
    }
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Change password ] error", err);
    defer.resolve({isUpdated: false});
  }
  return defer.promise;
};
