const validators = require("./validators");

class GroupValidator {
  static async validateGetGroupByNameData(data) {
    return validators.getGroupByName(data);
  }
  static async validateAddNewGroupData(data) {
    return validators.addNewGroup(data);
  }
}
module.exports = GroupValidator;
