const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  try {
    const validResult = await validator.validateGetBrandByNameData(params);
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }

    const brand = await repository.getBrandByName(validResult.value);

    defer.resolve({brand});
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Get Brand By Name] error", err);
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


// const getBrandByName = require("./get-brand-by-name");
