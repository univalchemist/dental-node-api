const repositories = require("./repositories");

class GroupRepository {
  static async getGroupByName(params) {
    return repositories.getGroupByName(params);
  }
  static async addNewGroup(params) {
    return repositories.addNewGroup(params);
  }
}
module.exports = GroupRepository;
