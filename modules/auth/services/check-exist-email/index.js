const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const profileService = include("modules/profile/service");
module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  const { body } = params;
  try {
    const validResult = await validator.validateCheckExistEmailData(body);
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }

    const { email } = body;

    let profile = await profileService.getProfileByEmail(email);

    if (profile) {
      defer.resolve({ isExist: true });
    } else {
      defer.resolve({ isExist: false });
    }
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Check Exist Email] error", err);
    const { error, code } = errorsCodes.SERVER_ERROR;
    defer.resolve({
      error,
      message: errorsMessages.SERVER_ERROR,
      code
    });
    return defer.promise;
  }
  return defer.promise;
};

// const checkExistEmail = require("./check-exist-email");
