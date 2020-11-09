const service = require("./service");
const controllers = require("./controllers");

class ProductController {
  static async addNewProduct(req, res) {
    controllers.addNewProduct(req, res, service);
  }
  static async editProduct(req, res) {
    controllers.editProduct(req, res, service);
  }
  static async deleteProduct(req, res) {
    controllers.deleteProduct(req, res, service);
  }
  static async archive(req, res) {
    controllers.archive(req, res, service);
  }
  static async unArchive(req, res) {
    controllers.unArchive(req, res, service);
  }
  static async startUseProduct(req, res) {
    controllers.startUseProduct(req, res, service);
  }
  static async stopUseProduct(req, res) {
    controllers.stopUseProduct(req, res, service);
  }
}

module.exports = ProductController;
