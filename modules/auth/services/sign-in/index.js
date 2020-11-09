const q = require("q");
const profileService = include("modules/profile/service");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const JWT = require("../JWT");
const { parseObjectId } = include("common/helper/generalHelper");
const _ = require("lodash");
module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  const { body } = params;
  const { email, username, password } = body;
  try {
    const validResult = await validator.validateSignInData(body);
    if (validResult.error) {
      const { error, code } = errorsCodes.BAD_REQUEST;
      defer.resolve({
        error,
        message: validResult.error,
        code
      });
      return defer.promise;
    }
    let profile;
    if (email && email != "") {
      profile = await profileService.getProfileByEmail(email, true);
    } else if (username && username != "") {
      profile = await profileService.getProfileByUsername(username, true);
    }

    if (!profile) {
      const { error, code } = errorsCodes.BAD_REQUEST;
      defer.resolve({
        error,
        message: "Invalid login details",
        code
      });
      return defer.promise;
    }
    let isCorrectPassword = await profileService.checkPassword({
      password,
      user: profile
    });
    if (!isCorrectPassword) {
      const { error, code } = errorsCodes.BAD_REQUEST;
      defer.resolve({
        error,
        message: "Wrong password",
        code
      });
      return defer.promise;
    }
    let token = JWT.sign(parseObjectId(profile));
    defer.resolve({ token, user: _.omit(profile, "password") });
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Sign In] error", err);
    const { error, code } = Error.SERVER_ERROR;
    defer.resolve({
      error,
      message: errorsMessages.SERVER_ERROR,
      code
    });
    return defer.promise;
  }
  return defer.promise;
};

// const signIn = require("./sign-in");
