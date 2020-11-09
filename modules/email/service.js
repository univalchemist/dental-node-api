const services = require("./services");
const validator = require("./validator");
const repository = require("./repository");
const cacheService = require("./cache");

class EmailService {
  static async sendMail(params) {
    return services.sendMail(params, validator, repository, cacheService);
  }

  static async sendForgotPasswordEmail(email, data) {
    return services.forgotPassword(email, data);
  }
}
module.exports = EmailService;
