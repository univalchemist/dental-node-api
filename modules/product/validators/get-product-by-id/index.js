const q = require("q");
const Joi = require("joi");

const validateSchema = Joi.object({
  id: Joi.string().required()
});

module.exports = async (body) => {
  const defer = q.defer();
  const result = validateSchema.validate(body, {
    stripUnknown: true,
  });

  if (result.error) {
    log.error("[VALIDATION][EXECEPTION][Get Product By Id] error:", result.error);
    defer.resolve({ error: result.error.message });
  } else {
    defer.resolve({success: true});
  }

  return defer.promise;
};

// static async validateGetProductByIdData(data) {
//   return validators.getProductById(data);
// }

// const getProductById = require("./get-product-by-id");
