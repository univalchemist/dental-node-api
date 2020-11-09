const service = require("./service");
const controllers = require("./controllers");

class SubCategoryController {
  static async getSubCategory(req, res) {
    controllers.getSubCategory(req, res, service);
  }
  static async addNewSubCategory(req, res) {
    controllers.addNewSubCategory(req, res, service);
  }
}

module.exports = SubCategoryController;
