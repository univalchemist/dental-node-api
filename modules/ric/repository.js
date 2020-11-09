const repositories = require("./repositories");

class RicRepository {
  static async getRicByName(params) {
    return repositories.getRicByName(params);
  }
}
module.exports = RicRepository;
