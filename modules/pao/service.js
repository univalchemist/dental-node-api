const services = require("./services");
const validator = require("./validator");
const repository = require("./repository");
const cacheService = require("./cache");

class PaoService {
  static async getPaoByName(params) {
    return services.getPaoByName(params, validator, repository, cacheService);
  }
}
module.exports = PaoService;
