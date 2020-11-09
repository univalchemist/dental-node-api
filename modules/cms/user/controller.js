const service = require("./service");
const controllers = require("./controllers");

class UserController {
  static async getListUser(req, res) {
    await controllers.getListUser(req, res, service);
  }

  static async getUserDetail(req, res) {
    controllers.getUserDetail(req, res, service);
  }
}

module.exports = UserController;
