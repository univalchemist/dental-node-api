const services = require("./services");
const validator = require("./validator");
const repository = require("./repository");
const cacheService = require("./cache");

class BrandService {
  static async addNewBrand(params) {
    return services.addNewBrand(params, validator, repository, cacheService);
  }
  static async getBrandByName(params) {
    return services.getBrandByName(params, validator, repository, cacheService);
  }
  static async checkExistName(params) {
    return services.checkExistName(params, validator, repository, cacheService);
  }
  static async getBrandById(params) {
    return services.getBrandById(params, validator, repository, cacheService);
  }
}
module.exports = BrandService;
