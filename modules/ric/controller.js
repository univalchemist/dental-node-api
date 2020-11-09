const service = require("./service");
const controllers = require("./controllers");

class RicController {
  static async getRicByName(req, res) {
    controllers.getRicByName(req, res, service);
  }
}

module.exports = RicController;
