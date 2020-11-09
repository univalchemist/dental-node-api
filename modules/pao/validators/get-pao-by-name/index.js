const q = require("q");
const Joi = require("joi");

const config = include("common/config/");

const validateSchema = Joi.object({
  name: Joi.string().required()
});

module.exports = async (body) => {
  const defer = q.defer();
  const result = validateSchema.validate(body, {
    stripUnknown: true,
  });

  if (result.error) {
    log.error("[VALIDATION][EXECEPTION][Get Pao By Name] error:", result.error);
    defer.resolve({ error: result.error.message });
  } else {
    defer.resolve(result);
  }

  return defer.promise;
};


// const getPaoByName = require("./get-pao-by-name");
