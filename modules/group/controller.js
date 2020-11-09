const service = require("./service");
const controllers = require("./controllers");

class GroupController {
  static async getGroupByName(req, res) {
    controllers.getGroupByName(req, res, service);
  }
  static async addNewGroup(req, res) {
    controllers.addNewGroup(req, res, service);
  }
}

module.exports = GroupController;
