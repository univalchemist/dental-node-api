const services = require("./services");
const validator = require("./validator");
const repository = require("./repository");
const cacheService = require("./cache");

class RicService {
  static async getRicByName(params) {
    return services.getRicByName(params, validator, repository, cacheService);
  }
}
module.exports = RicService;
