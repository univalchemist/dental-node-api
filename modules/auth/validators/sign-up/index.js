const q = require("q");
const Joi = require("joi");

const validateSchema = Joi.object({
  email: Joi.string().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string()
    .min(6)
    .required(),
  avatar: Joi.string()
    .optional()
    .default("")
    .allow("")
    .allow(null),
});

module.exports = async body => {
  const defer = q.defer();
  const result = validateSchema.validate(body, {
    stripUnknown: true
  });

  if (result.error) {
    log.error("[VALIDATION][EXECEPTION][Sign Up] error:", result.error);
    defer.resolve({ error: result.error.message });
  } else {
    defer.resolve(result);
  }

  return defer.promise;
};

// const signUp = require("./sign-up");
