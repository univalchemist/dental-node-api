const joi = require("joi");
const common = require("./common");

const envVarsSchema = joi
  .object({
    DB_URI: joi.string().required(),
    DB_TEST_URI: joi.string().required()
  })
  .required()
  .unknown();

const { error, value: envVars } = envVarsSchema.validate(process.env);
if (error) {
  throw new Error(`Config validation error for mLab: ${error.message}`);
}

let isTesting = common.env == "test";
let uri = isTesting ? envVars.DB_TEST_URI : envVars.DB_URI;
const config = {
  db: uri
};

module.exports = config;
