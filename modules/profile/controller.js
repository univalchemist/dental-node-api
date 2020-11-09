const service = require("./service");
const controllers = require("./controllers");

class ProfileController {
  static async getProfile(req, res) {
    controllers.getProfile(req, res, service);
  }
  static async editProfile(req, res) {
    controllers.editProfile(req, res, service);
  }
  static async changePassword(req, res) {
    controllers.changePassword(req, res, service);
  }
}

module.exports = ProfileController;
