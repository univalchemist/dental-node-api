const validators = require("./validators");

class BrandValidator {
  static async validateAddNewBrandData(data) {
    return validators.addNewBrand(data);
  }
  static async validateGetBrandByNameData(data) {
    return validators.getBrandByName(data);
  }
  static async validateCheckExistNameData(data) {
    return validators.checkExistName(data);
  }
}
module.exports = BrandValidator;
