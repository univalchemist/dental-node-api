const validators = require("./validators");

class AuthValidator {
  static async validateSignInData(data) {
    return validators.signIn(data);
  }
}
module.exports = AuthValidator;
