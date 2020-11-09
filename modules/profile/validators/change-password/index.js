const q = require("q");
const Joi = require("joi");

const validateSchema = Joi.object({
  password: Joi.string().required(),
  oldPassword: Joi.string().required(),
});

module.exports = async (body) => {
  const defer = q.defer();
  const result = validateSchema.validate(body, {
    stripUnknown: true,
  });

  if (result.error) {
    log.error("[VALIDATION][EXECEPTION][Change Password] error:", result.error);
    defer.resolve({ error: result.error.message });
  } else {
    defer.resolve(result);
  }

  return defer.promise;
};


// const changePassword = require("./change-password");
