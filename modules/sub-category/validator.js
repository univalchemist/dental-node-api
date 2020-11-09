const validators = require("./validators");

class SubCategoryValidator {
  static async validateGetSubCategoryData(data) {
    return validators.getSubCategory(data);
  }
  static async validateAddNewSubCategoryData(data) {
    return validators.addNewSubCategory(data);
  }
}
module.exports = SubCategoryValidator;
