"use strict";

const joi = require("joi");

const envVarsSchema = joi
  .object({
    AWS_KEY: joi.string().required(),
    AWS_SECRET: joi.string().required(),
    AWS_S3_DEFAULT_BUCKET: joi.string().required(),
    AWS_S3_AVATAR_BUCKET: joi.string().required(),
    AWS_S3_REGION: joi.string().required(),
    AWS_S3_IMAGE_PRODUCT_BUCKET: joi.string().required(),
  })
  .unknown()
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  aws: {
    key: envVars.AWS_KEY,
    secret: envVars.AWS_SECRET,
    defaultBucket: envVars.AWS_S3_DEFAULT_BUCKET,
    avatarBucket: envVars.AWS_S3_AVATAR_BUCKET,
    productBucket: envVars.AWS_S3_IMAGE_PRODUCT_BUCKET,
    region: envVars.AWS_S3_REGION
  }
};

module.exports = config;
