const validators = require("./validators");

class PaoValidator {
  static async validateGetPaoByNameData(data) {
    return validators.getPaoByName(data);
  }
}
module.exports = PaoValidator;
