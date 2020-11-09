const q = require("q");
const Joi = require("joi");

const config = include("common/config/");
const GeneralHelper = include("common/helper/generalHelper");

const validateSchema = Joi.object({
  name: Joi.string().required(),
  image: Joi.string(),
  description: Joi.string(),
  brandName: Joi.string().required(),
  icon: Joi.string().required(),
  size: Joi.number().required(),
  unit: Joi.string()
    .valid(config.UNIT_GAM, config.UNIT_MILILIT)
    .required(),
  topLevel: Joi.string(),
  quantity: Joi.number().required(),
  category: Joi.string().required(),
  subCategory: Joi.string().required(),
  pao: Joi.string().required(),
  ric: Joi.string().required(),
  dateOpen: Joi.string(),
  expired: Joi.string(),
  dateStartUse: Joi.string(),
  dateStartEnd: Joi.string(),
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
    log.error("[VALIDATION][EXECEPTION][Add New Product] error:", result.error);
    defer.resolve({ error: GeneralHelper.formatStringError(result.error.message) });
  } else {
    defer.resolve(result);
  }

  return defer.promise;
};


// const addNewProduct = require("./add-new-product");
