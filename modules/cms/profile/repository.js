const repositories = require("./repositories");

class ProfileRepository {
  static async getProfile(params) {
    return repositories.getProfile(params);
  }
}
module.exports = ProfileRepository;
