const q = require("q");
const Joi = require("joi");

const config = include("common/config/");

const validateSchema = Joi.object({
  id: Joi.string().required()
});

module.exports = async body => {
  const defer = q.defer();
  const result = validateSchema.validate(body, {
    stripUnknown: true
  });

  if (result.error) {
    log.error("[VALIDATION][EXECEPTION][Validate Email] error:", result.error);
    defer.resolve({ error: result.error.message });
  } else {
    defer.resolve({ success: true });
  }

  return defer.promise;
};

// const validateEmail = require("./validate-email");
