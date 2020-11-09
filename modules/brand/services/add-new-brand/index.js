const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const checkExistName = require("../check-exist-name");

module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  try {
    const validResult = await validator.validateAddNewBrandData(params);
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }

    const brandExist = await checkExistName(
      { body: validResult.value},
      validator,
      repository,
      cacheService,
    );

    if(brandExist.isExist) {
      const { error, code } = errorsCodes.BAD_REQUEST;
      defer.resolve({
        error,
        message: "Brand has been used",
        code
      });
      return defer.promise;
    }
    const brand = await repository.addNewBrand(validResult.value);
    defer.resolve({ brand });
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Add New Brand] error", err);
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


// const addNewBrand = require("./add-new-brand");
