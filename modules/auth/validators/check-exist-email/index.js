const q = require("q");
const Joi = require("joi");

const validateSchema = Joi.object({
  email: Joi.string().required()
});

module.exports = async body => {
  const defer = q.defer();
  const result = validateSchema.validate(body, {
    stripUnknown: true
  });

  if (result.error) {
    log.error(
      "[VALIDATION][EXECEPTION][Check Exist Email] error:",
      result.error
    );
    defer.resolve({ error: result.error.message });
  } else {
    defer.resolve({ success: true });
  }

  return defer.promise;
};

// const checkExistEmail = require("./check-exist-email");
