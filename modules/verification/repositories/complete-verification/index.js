const Verification = include("domain/models/verification");
const config = include("common/config");
const { parseObjectId } = include("common/helper/generalHelper");
module.exports = async verification => {
  let verificationId = parseObjectId(verification);
  return Verification.updateOne(
    { _id: verificationId },
    { $set: { status: config.VERIFICATION_STATUS_COMPLETED } }
  );
};

//const completeVerification = require("./complete-verification");
