const q = require("q");
const Joi = require("joi");

const config = include("common/config/");

const validateSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string(),
});

module.exports = async (body) => {
  const defer = q.defer();
  const result = validateSchema.validate(body, {
    stripUnknown: true,
  });

  if (result.error) {
    log.error("[VALIDATION][EXECEPTION][Edit Profile] error:", result.error);
    defer.resolve({ error: result.error.message });
  } else {
    defer.resolve(result);
  }

  return defer.promise;
};

// const editProfile = require("./edit-profile");
