const repositories = require("./repositories");

class ProductRepository {
  static async addNewProduct(params) {
    return repositories.addNewProduct(params);
  }
  static async editProduct(params) {
    return repositories.editProduct(params);
  }
  static async deleteProduct(params) {
    return repositories.deleteProduct(params);
  }
  static async getProductById(params) {
    return repositories.getProductById(params);
  }
  static async archive(params) {
    return repositories.archive(params);
  }
  static async unArchive(params) {
    return repositories.unArchive(params);
  }
  static async startUseProduct(params) {
    return repositories.startUseProduct(params);
  }
  static async stopUseProduct(params) {
    return repositories.stopUseProduct(params);
  }
}
module.exports = ProductRepository;
