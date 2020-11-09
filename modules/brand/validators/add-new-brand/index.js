const q = require("q");
const Joi = require("joi");

const config = include("common/config/");
const GeneralHelper = include("common/helper/generalHelper");

const validateSchema = Joi.object({
  name: Joi.string().required()
});

module.exports = async (body) => {
  const defer = q.defer();
  const result = validateSchema.validate(body, {
    stripUnknown: true,
    errors: {
      escapeHtml: true,
    }
  });

  if (result.error) {
    log.error("[VALIDATION][EXECEPTION][Add New Brand] error:", result.error);
    defer.resolve({ error: GeneralHelper.formatStringError(result.error.message) });
  } else {
    defer.resolve(result);
  }

  return defer.promise;
};


// const addNewBrand = require("./add-new-brand");
