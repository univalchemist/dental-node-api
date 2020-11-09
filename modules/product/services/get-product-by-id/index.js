const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  const { id } = params;
  try {
    const product = await repository.getProductById(id);
    if(product) {
      defer.resolve({ isExist: true, product });
    } else {
      defer.resolve({ isExist: false, product: null });
    }
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Get Product By Id] error", err);
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


// const getProductById = require("./get-product-by-id");
