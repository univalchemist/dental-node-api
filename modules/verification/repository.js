const repositories = require("./repositories");

class VerificationRepository {
  static async getForgetPasswordVerificationByProfile(profile) {
    return repositories.getForgetPasswordVerificationByProfile(profile);
  }
  static async addNewForgetPasswordVerification(profile) {
    return repositories.addNewForgetPasswordVerification(profile);
  }
  static async getForgetPasswordVerificationByToken(token) {
    return repositories.getForgetPasswordVerificationByToken(token);
  }
  static async completeVerification(verification) {
    return repositories.completeVerification(verification);
  }
}
module.exports = VerificationRepository;
