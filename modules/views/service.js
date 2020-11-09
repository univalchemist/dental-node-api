const services = require("./services");
const validator = require("./validator");
const repository = require("./repository");
const cacheService = require("./cache");

class ViewsService {
  static async resetPassword(params) {
    return services.resetPassword(params, validator, repository, cacheService);
  }
}
module.exports = ViewsService;
