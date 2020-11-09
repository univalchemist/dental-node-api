const services = require("./services");
const validator = require("./validator");
const repository = require("./repository");
const cacheService = require("./cache");

class ProductService {
  static async addNewProduct(params) {
    return services.addNewProduct(params, validator, repository, cacheService);
  }
  static async editProduct(params) {
    return services.editProduct(params, validator, repository, cacheService);
  }
  static async deleteProduct(params) {
    return services.deleteProduct(params, validator, repository, cacheService);
  }
  static async getProductById(params) {
    return services.getProductById(params, validator, repository, cacheService);
  }
  static async archive(params) {
    return services.archive(params, validator, repository, cacheService);
  }
  static async unArchive(params) {
    return services.unArchive(params, validator, repository, cacheService);
  }
  static async startUseProduct(params) {
    return services.startUseProduct(params, validator, repository, cacheService);
  }
  static async stopUseProduct(params) {
    return services.stopUseProduct(params, validator, repository, cacheService);
  }
}
module.exports = ProductService;
