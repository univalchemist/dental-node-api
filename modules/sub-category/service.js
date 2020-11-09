const services = require("./services");
const validator = require("./validator");
const repository = require("./repository");
const cacheService = require("./cache");

class SubCategoryService {
  static async getSubCategory(params) {
    return services.getSubCategory(params, validator, repository, cacheService);
  }
  static async addNewSubCategory(params) {
    return services.addNewSubCategory(params, validator, repository, cacheService);
  }
}
module.exports = SubCategoryService;
