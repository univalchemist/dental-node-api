const q = require("q");
const ProfileModel = include("domain/models/profile");
const ProfileEntity = include("domain/entities/profile");
module.exports = async params => {
  const defer = q.defer();
  try {
    let profile = await ProfileModel.create(params);
    if (profile) {
      defer.resolve(new ProfileEntity(profile));
    } else {
      defer.resolve(null);
    }
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Add New User] error", err);
    defer.resolve(null);
  }
  return defer.promise;
};

//const addNewUser = require("./add-new-user");
