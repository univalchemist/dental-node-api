const validators = require("./validators");

class UserValidator {
  static async validateGetListUserData(data) {
    return validators.getListUser(data);
  }
  static async validateGetUserDetailData(data) {
    return validators.getUserDetail(data);
  }
}
module.exports = UserValidator;
