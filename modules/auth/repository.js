
const repositories = require("./repositories");

class AuthRepository {
  static async signUp(params) {
    return repositories.signUp(params);
  }
}
module.exports = AuthRepository;
