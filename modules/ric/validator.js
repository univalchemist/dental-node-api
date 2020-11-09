const validators = require("./validators");

class RicValidator {
  static async validateGetRicByNameData(data) {
    return validators.getRicByName(data);
  }
}
module.exports = RicValidator;
