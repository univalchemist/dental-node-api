const q = require("q");
const Joi = require("joi");

const config = include("common/config/");

const validateSchema = Joi.object({
  dateStartUse: Joi.date().iso().required(), // YYYY-MM-DD
});

module.exports = async (body) => {
  const defer = q.defer();
  const result = validateSchema.validate(body, {
    stripUnknown: true,
  });

  if (result.error) {
    log.error("[VALIDATION][EXECEPTION][Start Use Product] error:", result.error);
    defer.resolve({ error: result.error.message });
  } else {
    defer.resolve(result);
  }

  return defer.promise;
};

// const startUseProduct = require("./start-use-product");
