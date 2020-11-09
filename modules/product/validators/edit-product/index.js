const q = require("q");
const Joi = require("joi");
const config = include("common/config/");

const validateSchema = Joi.object({
  image: Joi.string(),
  icon: Joi.string(),
  name: Joi.string(),
  brandName: Joi.string(),
  size: Joi.number(),
  unit: Joi.string()
    .valid(config.UNIT_GAM, config.UNIT_MILILIT),
  quantity: Joi.number(),
  category: Joi.string(),
  subCategory: Joi.string(),
  group: Joi.string(),
  pao: Joi.string(),
  ric: Joi.string(),
  dateOpen: Joi.string(),
  expired: Joi.string(),
  dateStartUse: Joi.string(),
  dateStartEnd: Joi.string(),
});

module.exports = async (body) => {
  const defer = q.defer();
  const result = validateSchema.validate(body, {
    stripUnknown: true,
  });

  if (result.error) {
    log.error("[VALIDATION][EXCEPTION][Edit Product] error:", result.error);
    defer.resolve({ error: result.error.message });
  } else {
    defer.resolve(result);
  }

  return defer.promise;
};


// const editProduct = require("./edit-product");
