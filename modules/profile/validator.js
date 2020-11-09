const validators = require("./validators");

class ProfileValidator {
  static async validateGetProfileByEmailData(data) {
    return validators.getProfileByEmail(data);
  }
  static async validateGetProfileByUsernameData(data) {
    return validators.getProfileByUsername(data);
  }
  static async validateEditProfileData(data) {
    return validators.editProfile(data);
  }
  static async validateChangePasswordData(data) {
    return validators.changePassword(data);
  }
}
module.exports = ProfileValidator;
