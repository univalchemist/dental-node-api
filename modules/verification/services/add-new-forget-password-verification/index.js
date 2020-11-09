module.exports = async (profile, validator, repository, cacheService) => {
  return repository.addNewForgetPasswordVerification(profile);
};

// const addNewForgetPasswordVerification = require("./add-new-forget-password-verification");
