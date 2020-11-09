const services = require("./services");
const validator = require("./validator");
const repository = require("./repository");
const cacheService = require("./cache");

class UserService {
  static async getListUser(params) {
    return services.getListUser(params, validator, repository, cacheService);
  }
  static async getUserDetail(params) {
    return services.getUserDetail(params, validator, repository, cacheService);
  }
}
module.exports = UserService;
