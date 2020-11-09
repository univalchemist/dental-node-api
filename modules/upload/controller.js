const service = require("./service");
const controllers = require("./controllers");

class UploadController {
  static async uploadAvatar(req, res) {
    controllers.uploadAvatar(req, res, service);
  }
}

module.exports = UploadController;
