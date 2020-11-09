const services = require("./services");
const validator = require("./validator");
const repository = require("./repository");
const cacheService = require("./cache");

class AuthService {
  static async signIn(params) {
    return services.signIn(params, validator, repository, cacheService);
  }
}
module.exports = AuthService;
