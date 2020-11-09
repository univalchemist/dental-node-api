const q = require("q");
const Joi = require("joi");

const validateSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string()
    .default("")
    .allow("")
    .allow(null),
  username: Joi.string()
    .default("")
    .allow("")
    .allow(null)
});

module.exports = async data => {
  const defer = q.defer();
  const result = validateSchema.validate(data, {
    stripUnknown: true
  });

  if (result.error) {
    log.error("[VALIDATION][EXECEPTION][Sign In] error:", result.error);
    defer.resolve({ error: result.error.message });
  } else {
    defer.resolve({ success: true });
  }

  return defer.promise;
};

// const signIn = require("./sign-in");
