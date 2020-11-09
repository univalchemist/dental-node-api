const repositories = require("./repositories");

class BrandRepository {
  static async addNewBrand(params) {
    return repositories.addNewBrand(params);
  }
  static async getBrandByName(params) {
    return repositories.getBrandByName(params);
  }
  static async getBrandById(params) {
    return repositories.getBrandById(params);
  }
}
module.exports = BrandRepository;
