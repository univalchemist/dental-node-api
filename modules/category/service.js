const services = require("./services");
const validator = require("./validator");
const repository = require("./repository");
const cacheService = require("./cache");

class CategoryService {
  static async addNewCategory(params) {
    return services.addNewCategory(params, validator, repository, cacheService);
  }
  static async checkExistName(params) {
    return services.checkExistName(params, validator, repository, cacheService);
  }
  static async getCategory(params) {
    return services.getCategory(params, validator, repository, cacheService);
  }
}
module.exports = CategoryService;
