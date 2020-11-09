const services = require("./services");
const validator = require("./validator");
const repository = require("./repository");
const cacheService = require("./cache");

class UploadService {
  static async uploadAvatar(params) {
    return services.uploadAvatar(params, validator, repository, cacheService);
  }
  static async uploader(params) {
    return services.uploader(params, validator, repository, cacheService);
  }
}
module.exports = UploadService;
