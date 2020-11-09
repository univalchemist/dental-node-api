const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const brandService = include("modules/brand/service");

module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  const { body } = params;
  try {
    const validResult = await validator.validateAddNewProductData(body);
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }

    const { brandName } = validResult.value;
    const getBrandByName = await brandService.getBrandByName({name: brandName});

    if(getBrandByName.brand) {
      validResult.value.brandName = getBrandByName.brand._id;
    } else {
      const newBrand = await brandService.addNewBrand({ name: brandName });

      if(newBrand.error){
        defer.resolve(newBrand);
        return defer.promise;
      } else {
        validResult.value.brandName = newBrand.brand._id;
      }
    }

    const product = await repository.addNewProduct(validResult.value);
    if(product) {
      defer.resolve({product});
    }
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Add New Product] error", err);
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


// const addNewProduct = require("./add-new-product");
