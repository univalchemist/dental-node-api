const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (verification, validator, repository, cacheService) => {
  return repository.completeVerification(
    verification,
    validator,
    repository,
    cacheService
  );
};

// const completeVerification = require("./complete-verification");
