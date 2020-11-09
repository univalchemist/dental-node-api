const service = require("./service");
const controllers = require("./controllers");

class PaoController {
  static async getPaoByName(req, res) {
    controllers.getPaoByName(req, res, service);
  }
}

module.exports = PaoController;
