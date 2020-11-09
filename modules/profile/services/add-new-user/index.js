const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (params, validator, repository, cacheService) => {
  return repository.addNewUser(params);
};

// const addNewUser = require("./add-new-user");
