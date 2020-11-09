const q = require("q");
const Joi = require("joi");

const config = include("common/config/");

const validateSchema = Joi.object({
  page: Joi.number()
    .optional()
    .default(1),
  limit: Joi.number()
    .optional()
    .default(50),
  query: Joi.string()
    .optional()
    .default("")
    .allow("")
    .allow(null)
});

module.exports = async body => {
  const defer = q.defer();
  const result = validateSchema.validate(body, {
    stripUnknown: true
  });

  if (result.error) {
    log.error("[VALIDATION][EXECEPTION][Get List User] error:", result.error);
    defer.resolve({ error: result.error.message });
  } else {
    defer.resolve(result);
  }

  return defer.promise;
};

// const getListUser = require("./get-list-user");
