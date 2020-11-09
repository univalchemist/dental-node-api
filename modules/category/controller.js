const service = require("./service");
const controllers = require("./controllers");

class CategoryController {
  static async addNewCategory(req, res) {
    await controllers.addNewCategory(req, res, service);
  }
  static async checkExistName(req, res) {
    await controllers.checkExistName(req, res, service);
  }
  static async getCategory(req, res) {
    controllers.getCategory(req, res, service);
  }
}

module.exports = CategoryController;
