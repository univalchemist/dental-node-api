const service = require("./service");
const controllers = require("./controllers");

class ViewsController {
  static async resetPassword(req, res) {
    controllers.resetPassword(req, res, service);
  }
  static async confirmResetPassword(req, res) {
    controllers.confirmResetPassword(req, res, service);
  }
}

module.exports = ViewsController;
