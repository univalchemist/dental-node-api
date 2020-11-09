const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  try {
    const validResult = await validator.validateGetRicByNameData(params);
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }
    const ric = await repository.getRicByName(validResult.value);
    defer.resolve({ric});
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Get Ric By Name] error", err);
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


// const getRicByName = require("./get-ric-by-name");
