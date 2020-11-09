const validators = require("./validators");

class ProductValidator {
  static async validateAddNewProductData(data) {
    return validators.addNewProduct(data);
  }
  static async validateEditProductData(data) {
    return validators.editProduct(data);
  }
  static async validateArchiveData(data) {
    return validators.archive(data);
  }
  static async validateUnArchiveData(data) {
    return validators.unArchive(data);
  }
  static async validateStartUseProductData(data) {
    return validators.startUseProduct(data);
  }
  static async validateStopUseProductData(data) {
    return validators.stopUseProduct(data);
  }
}
module.exports = ProductValidator;
