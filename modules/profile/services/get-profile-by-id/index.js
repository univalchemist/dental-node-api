const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (profileId, validator, repository, cacheService) => {
  const defer = q.defer();
  const { body, user } = params;
  try {
    const validResult = await validator.validateGetProfileByIdData(body);
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }
    defer.resolve({});
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Get Profile By Id] error", err);
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

// const getProfileById = require("./get-profile-by-id");
