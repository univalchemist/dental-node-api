const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const checkPassword = require("../check-password");

module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  const { body, user } = params;
  try {
    const validResult = await validator.validateChangePasswordData(body);
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }

    const { oldPassword } = validResult.value;

    const isCheckPass = await checkPassword(
      { password: oldPassword, user },
      validator,
      repository,
      cacheService
    );

    if (!isCheckPass) {
      const { error, code } = errorsCodes.BAD_REQUEST;
      defer.resolve({
        error,
        message: "Incorrect Password. Please try again.",
        code
      });
    }
    const isUpdatePassword = await repository.changePassword(params);
    if (isUpdatePassword) {
      defer.resolve({ success: true });
    } else {
      defer.resolve({ success: false });
    }
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Change Password] error", err);
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

// const changePassword = require("./change-password");
