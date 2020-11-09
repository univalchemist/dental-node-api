const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const sanitizer = require("../../sanitizer");
const brandService = include("modules/brand/service");
const { checkObjectIdValid } = include("common/helper/generalHelper");
const getProductById = require("../get-product-by-id");

module.exports = async (payload, validator, repository, cacheService) => {
  const defer = q.defer();
  const { body, params } = payload;
  const sanitizerBody = sanitizer(body);
  try {

    const CheckExistProduct = await getProductById(
      { id: params.id },
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

    const validResult = await validator.validateEditProductData({...sanitizerBody});
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }

    const { brandName } = validResult.value;
    const isCheckObjectId = checkObjectIdValid(brandName);
    if(isCheckObjectId) {
      const brand = await brandService.getBrandById({id: brandName});
      validResult.value.brandName = brand._id;
    }

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

    const updateProduct = await repository.editProduct({id: params.id, data: validResult.value});
    if(updateProduct.isUpdate) {
      defer.resolve({success: true});
    } else {
      defer.resolve({success: false});
    }
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Edit Product] error", err);
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


// const editProduct = require("./edit-product");
