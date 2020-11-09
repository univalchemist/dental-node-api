const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (profile, validator, repository, cacheService) => {
  return repository.getForgetPasswordVerificationByProfile(profile);
  // const defer = q.defer();
  // const { body, user } = params;
  // try {
  //   const validResult = await validator.validateGetForgetPasswordVerificationByProfileData(
  //     body
  //   );
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
  //   log.error(
  //     "[SERVICE][EXECEPTION][Get Forget Password Verification By Profile] error",
  //     err
  //   );
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

// const getForgetPasswordVerificationByProfile = require("./get-forget-password-verification-by-profile");
