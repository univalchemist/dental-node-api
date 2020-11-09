const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (token, validator, repository, cacheService) => {
  return repository.getForgetPasswordVerificationByToken(token);
};

// const getForgetPasswordVerificationByToken = require("./get-forget-password-verification-by-token");
