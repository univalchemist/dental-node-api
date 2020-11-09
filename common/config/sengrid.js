"use strict";

const joi = require("joi");

const envVarsSchema = joi
  .object({
    SENDGRID_API_KEY: joi.string().required()
  })
  .unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  sendgrid: {
    apiKey: envVars.SENDGRID_API_KEY
  }
};

module.exports = config;
