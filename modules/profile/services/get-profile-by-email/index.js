// const q = require("q");
// const errorsCodes = include("modules/error/codes");
// const errorsMessages = include("modules/error/messages");

module.exports = async (
  email,
  needPassword,
  validator,
  repository,
  cacheService
) => {
  return repository.getProfileByEmail(email, needPassword);
  // const defer = q.defer();
  // const { body, user } = params
  // try {
  //   const validResult = await validator.validateGetProfileByEmailData(body);
  //   if (validResult.error) {
  //     defer.resolve({
  //       error: "VALIDATION_ERROR",
  //       message: validResult.error,
  //       code: 400
  //     });
  //     return defer.promise;
  //   }
  //   defer.resolve({});
  // } catch (err) {
  //   log.error("[SERVICE][EXECEPTION][Get Profile By Email] error", err);
  //   const { error, code } = errorsCodes.SERVER_ERROR;
  //   defer.resolve({
  //     error,
  //     message: errorsMessages.SERVER_ERROR,
  //     code
  //   });
  //   return defer.promise;
  // }
  // return defer.promise;
};

// const getProfileByEmail = require("./get-profile-by-email");
