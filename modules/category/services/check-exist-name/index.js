const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const getCategory = require("../get-category");

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

    let category = await getCategory(
      validResult.value,
      validator,
      repository,
      cacheService,
    );
    if (category.category) {
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
