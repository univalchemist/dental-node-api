const repositories = require("./repositories");

class CategoryRepository {
  static async addNewCategory(name) {
    return repositories.addNewCategory(name);
  }
  static async getCategory(params) {
    return repositories.getCategory(params);
  }
}
module.exports = CategoryRepository;
