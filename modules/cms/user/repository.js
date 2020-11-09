const repositories = require("./repositories");

class UserRepository {
  static async getListUser(params) {
    return repositories.getListUser(params);
  }
  static async getUserDetail(params) {
    return repositories.getUserDetail(params);
  }
}
module.exports = UserRepository;
