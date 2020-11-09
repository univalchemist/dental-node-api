const repositories = require("./repositories");

class AuthRepository {
  static async signIn(params) {
    return repositories.signIn(params);
  }
}
module.exports = AuthRepository;
