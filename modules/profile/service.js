const services = require("./services");
const validator = require("./validator");
const repository = require("./repository");
const cacheService = require("./cache");

class ProfileService {
  static async getProfileByEmail(params, needPassword) {
    return services.getProfileByEmail(
      params,
      needPassword,
      validator,
      repository,
      cacheService
    );
  }
  static async getProfileByUsername(params, needPassword) {
    return services.getProfileByUsername(
      params,
      needPassword,
      validator,
      repository,
      cacheService
    );
  }
  static async checkPassword(params) {
    return services.checkPassword(params, validator, repository, cacheService);
  }

  static async addNewUser(params) {
    return services.addNewUser(params, validator, repository, cacheService);
  }
  static async editProfile(params) {
    return services.editProfile(params, validator, repository, cacheService);
  }
  static async changePassword(params) {
    return services.changePassword(params, validator, repository, cacheService);
  }
  static async getProfileById(profileId) {
    return services.getProfileById(
      profileId,
      validator,
      repository,
      cacheService
    );
  }
  static async changeUserPassword(profile, password) {
    return services.changeUserPassword(
      profile,
      password,
      validator,
      repository,
      cacheService
    );
  }
}
module.exports = ProfileService;
