const services = require("./services");
const validator = require("./validator");
const repository = require("./repository");
const cacheService = require("./cache");

class VerificationService {
  static async getForgetPasswordVerificationByProfile(profile) {
    return services.getForgetPasswordVerificationByProfile(
      profile,
      validator,
      repository,
      cacheService
    );
  }
  static async addNewForgetPasswordVerification(profile) {
    return services.addNewForgetPasswordVerification(
      profile,
      validator,
      repository,
      cacheService
    );
  }
  static async getForgetPasswordVerificationByToken(token) {
    return services.getForgetPasswordVerificationByToken(
      token,
      validator,
      repository,
      cacheService
    );
  }
  static async completeVerification(verification) {
    return services.completeVerification(
      verification,
      validator,
      repository,
      cacheService
    );
  }
}
module.exports = VerificationService;
