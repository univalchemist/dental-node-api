const services = require("./services");
const validator = require("./validator");
const repository = require("./repository");
const cacheService = require("./cache");

class GroupService {
  static async getGroupByName(params) {
    return services.getGroupByName(params, validator, repository, cacheService);
  }
  static async addNewGroup(params) {
    return services.addNewGroup(params, validator, repository, cacheService);
  }
  static async checkIsExistGroup(params) {
    return services.checkIsExistGroup(params, validator, repository, cacheService);
  }
}
module.exports = GroupService;
