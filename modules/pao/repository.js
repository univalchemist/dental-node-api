const repositories = require("./repositories");

class PaoRepository {
  static async getPaoByName(params) {
    return repositories.getPaoByName(params);
  }
}
module.exports = PaoRepository;
