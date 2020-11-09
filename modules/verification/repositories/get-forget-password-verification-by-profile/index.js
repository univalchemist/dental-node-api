const Verification = include("domain/models/verification");
const { parseObjectId } = include("common/helper/generalHelper");
const config = include("common/config");
module.exports = async user => {
  let profile = parseObjectId(user);
  return Verification.findOne({
    profile,
    action: "forgot_password",
    status: config.VERIFICATION_STATUS_PENDING
  });
};

//const getForgetPasswordVerificationByProfile = require("./get-forget-password-verification-by-profile");
