const repositories = require("./repositories");

class ProfileRepository {
  static async getProfileByEmail(params, needPassword) {
    return repositories.getProfileByEmail(params, needPassword);
  }
  static async getProfileByUsername(params, needPassword) {
    return repositories.getProfileByUsername(params, needPassword);
  }
  static async addNewUser(params) {
    return repositories.addNewUser(params);
  }
  static async editProfile(params) {
    return repositories.editProfile(params);
  }
  static async changePassword(params) {
    return repositories.changePassword(params);
  }
  static async changeUserPassword(profile, password) {
    return repositories.changeUserPassword(profile, password);
  }
  static async getProfileById(params) {
    return repositories.getProfileById(params);
  }
}
module.exports = ProfileRepository;
