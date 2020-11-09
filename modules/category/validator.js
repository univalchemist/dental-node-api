const validators = require("./validators");

class CategoryValidator {
  static async validateAddNewCategoryData(data) {
    return validators.addNewCategory(data);
  }
  static async validateCheckExistNameData(data) {
    return validators.checkExistName(data);
  }
  static async validateGetCategoryData(data) {
    return validators.getCategory(data);
  }
}
module.exports = CategoryValidator;
