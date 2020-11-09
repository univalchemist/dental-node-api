const service = require("./service");
const controllers = require("./controllers");

class ProfileController {
  static async getProfile(req, res) {
    controllers.getProfile(req, res, service);
  }
}

module.exports = ProfileController;
