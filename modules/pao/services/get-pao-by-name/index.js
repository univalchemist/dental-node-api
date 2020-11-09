const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  try {
    const validResult = await validator.validateGetPaoByNameData(params);
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }
    const pao = await repository.getPaoByName(validResult.value);
    defer.resolve({ pao });
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Get Pao By Name] error", err);
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


// const getPaoByName = require("./get-pao-by-name");
