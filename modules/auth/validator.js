const validators = require("./validators");

class AuthValidator {
  static async validateSignInData(data) {
    return validators.signIn(data);
  }
  static async validateSignUpData(data) {
    return validators.signUp(data);
  }
  static async validateCheckExistEmailData(data) {
    return validators.checkExistEmail(data);
  }
  static async validateCheckExistUsernameData(data) {
    return validators.checkExistUsername(data);
  }
  static async validateForgotPasswordData(data) {
    return validators.forgotPassword(data);
  }
}
module.exports = AuthValidator;
