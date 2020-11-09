const validators = require("./validators");

class ViewsValidator {
  static async validateResetPasswordData(data) {
    return validators.resetPassword(data);
  }
}
module.exports = ViewsValidator;
