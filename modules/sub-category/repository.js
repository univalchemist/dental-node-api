const repositories = require("./repositories");

class SubCategoryRepository {
  static async getSubCategory(params) {
    return repositories.getSubCategory(params);
  }
  static async addNewSubCategory(params) {
    return repositories.addNewSubCategory(params);
  }
}
module.exports = SubCategoryRepository;
