const validators = require("./validators");

class EmailValidator {
  static async validateEmail(data) {
    return validators.validateEmail(data);
  }
}
module.exports = EmailValidator;
