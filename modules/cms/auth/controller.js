const service = require("./service");
const controllers = require("./controllers");

class AuthController {
  static async signIn(req, res) {
    await controllers.signIn(req, res, service);
  }
}

module.exports = AuthController;
