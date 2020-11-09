const { parseObjectId, generateUniqueCode } = include(
  "common/helper/generalHelper"
);
const Verification = include("domain/models/verification");
const config = include("common/config");

module.exports = async user => {
  let profile = parseObjectId(user);

  let token = generateUniqueCode();
  return Verification.create({
    profile,
    action: "forgot_password",
    token,
    status: config.VERIFICATION_STATUS_PENDING
  });
};

//const addNewForgetPasswordVerification = require("./add-new-forget-password-verification");
