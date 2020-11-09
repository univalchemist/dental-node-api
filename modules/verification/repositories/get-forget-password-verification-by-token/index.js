const Verification = include("domain/models/verification");

module.exports = async token => {
  return Verification.findOne({
    token,
    action: "forgot_password"
  });
};

//const getForgetPasswordVerificationByToken = require("./get-forget-password-verification-by-token");
