const service = require("./service");
const controllers = require("./controllers");

class BrandController {
  static async addNewBrand(req, res) {
    controllers.addNewBrand(req, res, service);
  }
  static async getBrandByName(req, res) {
    controllers.getBrandByName(req, res, service);
  }
  static async checkExistName(req, res) {
    controllers.checkExistName(req, res, service);
  }
}

module.exports = BrandController;
