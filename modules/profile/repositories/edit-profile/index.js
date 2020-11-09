const q = require("q");
const ProfileModel = include("domain/models/profile");

module.exports = async params => {
  const defer = q.defer();
  const { user, body } = params;
  try {
    await ProfileModel.updateOne({ _id: user._id }, body);
    defer.resolve({ isUpdated: true});
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Edit Profile] error", err);
    defer.resolve({ isUpdated: false });
  }
  return defer.promise;
};
