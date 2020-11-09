const q = require("q");
const CategoryModel = include("domain/models/category");
module.exports = async params => {
  const defer = q.defer();
  try {
    let profile = await CategoryModel.create(params);
    if (profile) {
      defer.resolve(profile);
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
