const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const getBrandByName = require("../get-brand-by-name");

module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  const { body } = params;
  try {
    const validResult = await validator.validateCheckExistNameData(body);
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }

    const getBrand = await getBrandByName(
      validResult.value,
      validator,
      repository,
      cacheService,
    );
    const { brand } = getBrand;

    if(brand) {
      defer.resolve({ isExist: true });
    } else {
      defer.resolve({ isExist: false });
    }
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Check Exist Name] error", err);
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


// const checkExistName = require("./check-exist-name");
