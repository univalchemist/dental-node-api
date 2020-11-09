const service = require("./service");
const controllers = require("./controllers");

class AuthController {
  static async signIn(req, res) {
    controllers.signIn(req, res, service);
  }

  static async signUp(req, res) {
    controllers.signUp(req, res, service);
  }
  static async checkExistEmail(req, res) {
    controllers.checkExistEmail(req, res, service);
  }
  static async checkExistUsername(req, res) {
    controllers.checkExistUsername(req, res, service);
  }
  static async forgotPassword(req, res) {
    controllers.forgotPassword(req, res, service);
  }
}

module.exports = AuthController;
