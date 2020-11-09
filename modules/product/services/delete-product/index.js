const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const productService = require("../get-product-by-id");

module.exports = async (payload, validator, repository, cacheService) => {
  const defer = q.defer();
  const { params } = payload;
  const { id } = params;
  try {
    const CheckExistProduct = await productService(
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
    const product = await repository.deleteProduct(id);

    if(product.deletedCount) {
      defer.resolve({ success: true });
    } else {
      defer.resolve({ success: false });
    }
  } catch (err) {
    log.error("[SERVICE][EXCEPTION][Delete Product] error", err);
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


// const deleteProduct = require("./delete-product");
