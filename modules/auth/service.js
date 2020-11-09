const services = require("./services");
const validator = require("./validator");
const repository = require("./repository");
const cacheService = require("./cache");

class AuthService {
  static async signIn(params) {
    return services.signIn(params, validator, repository, cacheService);
  }
  static async signUp(params) {
    return services.signUp(params, validator, repository, cacheService);
  }
  static async checkExistEmail(params) {
    return services.checkExistEmail(
      params,
      validator,
      repository,
      cacheService
    );
  }
  static async checkExistUsername(params) {
    return services.checkExistUsername(
      params,
      validator,
      repository,
      cacheService
    );
  }
  static async forgotPassword(params) {
    return services.forgotPassword(params, validator, repository, cacheService);
  }
}
module.exports = AuthService;
