const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const profileService = include("modules/profile/service");
const emailService = include("modules/email/service");
const verificationService = include("modules/verification/service");
const config = include("common/config");
module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  const { body } = params;
  try {
    const validResult = await validator.validateForgotPasswordData(body);
    if (validResult.error) {
      const { error, code } = errorsCodes.BAD_REQUEST;
      defer.resolve({
        error,
        message: validResult.error,
        code
      });
      return defer.promise;
    }
    const { email } = body;
    let profile = await profileService.getProfileByEmail(email);

    if (!profile) {
      const { error, code } = errorsCodes.BAD_REQUEST;

      defer.resolve({
        error,
        message: "Email not found",
        code
      });
      return defer.promise;
    }
    if (profile.status === config.PROFILE_STATUS_PENDING) {
      const { error, code } = errorsCodes.BAD_REQUEST;

      defer.resolve({
        error,
        message: "Your account must be verified first",
        code
      });
      return defer.promise;
    }

    let existed = await verificationService.getForgetPasswordVerificationByProfile(
      profile
    );

    let token = "";
    if (!existed) {
      let verification = await verificationService.addNewForgetPasswordVerification(
        profile
      );
      token = verification.token;
    } else {
      token = existed.token;
    }

    let data = {
      token: token,
      name: profile.firstName
    };

    await emailService.sendForgotPasswordEmail(email, data);
    defer.resolve({ message: "Forgot password email sent successfully" });
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Forgot Password] error", err);
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

// const forgotPassword = require("./forgot-password");
