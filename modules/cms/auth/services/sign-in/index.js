const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const JWT = include("modules/auth/services/JWT");
const { parseObjectId } = include("common/helper/generalHelper");
const _ = require("lodash");

module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  const { body } = params;
  try {
    const validResult = await validator.validateSignInData(body);
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }

    const user = await repository.signIn(validResult.value);
    if (!user) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: "Email or password is wrong",
        code: 400
      });
    }

    let token = JWT.sign(parseObjectId(user));
    defer.resolve({ token, user: _.omit(user, "password") });
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Sign In Admin] error", err);
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

// const signUp = require("./sign-up");
