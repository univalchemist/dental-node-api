const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const getProductById = require('../get-product-by-id');

module.exports = async (payload, validator, repository, cacheService) => {
  const defer = q.defer();
  try {
    const { params, body } = payload;
    const { id } = params;
    const validResult = await validator.validateStopUseProductData(body);
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }
    const CheckExistProduct = await getProductById(
      { id },
      validator,
      repository,
      cacheService,
    );
    if(!CheckExistProduct.isExist) {
      const { error, code } = errorsCodes.BAD_REQUEST;
      defer.resolve({
        error,
        message: "The product is not found",
        code
      });
    }
    const updateProduct = await repository.stopUseProduct({id, data: validResult.value});
    if(updateProduct.isUpdate) {
      defer.resolve({success: true});
    } else {
      defer.resolve({success: false});
    }
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Stop Use Product] error", err);
    const { error, code } = errorsCodes.SERVER_ERROR;
    defer.resolve({
      error,
      message: errorsMessages.SERVER_ERROR,
      code
    });
    return defer.promise;
  }
  return defer.promise;
};


// const stopUseProduct = require("./stop-use-product");
