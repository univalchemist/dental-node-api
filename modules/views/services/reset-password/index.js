const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const verificationService = include("modules/verification/service");
const profileService = include("modules/profile/service");
const emailService = include("modules/email/service");

module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  const { parameters, user } = params;
  try {
    const validResult = await validator.validateResetPasswordData(body);
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
    log.error("[SERVICE][EXECEPTION][Reset Password] error", err);
    const { error, code } = errorsCodes.SERVER_ERROR;
    defer.resolve({
      error,
      message: errorsMessages.SERVER_ERROR,
      code
    });
    return defer.promise;
  }
  const { token } = parameters;
  let verification = await verificationService.getForgetPasswordVerificationByToken(
    token
  );

  if (!verification) {
    const { error, code } = errorsCodes.BAD_REQUEST;
    defer.resolve({
      error,
      message: "Invalid token",
      code
    });
    return defer.promise;
  }
  if (verification.status == config.VERIFICATION_STATUS_COMPLETED) {
    defer.resolve({ success: true });
    return defer.promise;
  }
  try {
    const profile = await profileService.getProfileById(verification.profile);
    if (!profile) {
      const { error, code } = errorsCodes.BAD_REQUEST;
      defer.resolve({
        error,
        message: "Cannot get associated profile with this token",
        code
      });
      return defer.promise;
    }
    let randomNum = Math.floor(Math.random() * 1000000) + 100000;
    let password = "Tp" + randomNum;
    await profileService.changeUserPassword(profile, password);
    await verificationService.completeVerification(verification);

    const dataPassword = {
      newPassword: password
    };
    await emailService.sendResetPasswordEmail(email, dataPassword);

    defer.resolve({ success: true });
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Reset Password] error", err);
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

// const resetPassword = require("./reset-password");
