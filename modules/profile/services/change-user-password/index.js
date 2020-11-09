const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (
  profile,
  password,
  validator,
  repository,
  cacheService
) => {
  return repository.changeUserPassword(profile, password);
};

// const changeUserPassword = require("./change-user-password");
