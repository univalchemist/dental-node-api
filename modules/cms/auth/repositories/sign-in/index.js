const q = require("q");
const AdminProfileModel = include("domain/models/admin");
const _ = require("lodash");
const bcrypt = require("bcryptjs");

module.exports = async ({ email, password, }) => {
  const defer = q.defer();
  try {
    let profile = await AdminProfileModel.findOne({ email });

    if (profile) {
      let userPassword = _.get(profile, "password", "");
      log.info('userPassword', userPassword);
      if(bcrypt.compareSync(password, userPassword)) {
        defer.resolve(profile);
      }
      defer.resolve(false);
    } else {
      defer.resolve(false);
    }
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Sign In Admin] error", err);
    defer.resolve(false);
  }
  return defer.promise;
};

//const signUp = require("./sign-up");
