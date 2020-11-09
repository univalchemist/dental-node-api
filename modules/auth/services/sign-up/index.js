const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const profileService = include("modules/profile/service");
const checkExistEmail = require("../check-exist-email");
const JWT = require("../JWT");
const { parseObjectId } = include("common/helper/generalHelper");
module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  const { body } = params;
  try {
    const validatedData = await validator.validateSignUpData(body);
    if (validatedData.error) {
      const { error, code } = errorsCodes.BAD_REQUEST;
      defer.resolve({
        error,
        message: validatedData.error,
        code
      });
      return defer.promise;
    }
    //Check email
    let checkEmailResult = await checkExistEmail(
      { body: validatedData.value },
      validator,
      repository,
      cacheService
    );
    if (checkEmailResult.isExist) {
      const { error, code } = errorsCodes.BAD_REQUEST;
      defer.resolve({
        error,
        message: "Email has been used",
        code
      });
      return defer.promise;
    }

    // Assign singed via
    validatedData.value.signedVia = 'email';

    // Assign identifier
    validatedData.value.identifier = 'identifier' + validatedData.value.email;

    const user = await profileService.addNewUser(validatedData.value);

    let token = JWT.sign(parseObjectId(user));
    defer.resolve({ token, user });
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Sign Up] error", err);
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
