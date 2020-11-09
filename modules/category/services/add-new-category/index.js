const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const checkExistName = require("../check-exist-name");

module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  const { body } = params;
  try {
    const validResult = await validator.validateAddNewCategoryData(body);
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }
    let checkCategoryResult = await checkExistName(
      { body: validResult.value },
      validator,
      repository,
      cacheService
    );

    if (checkCategoryResult.isExist) {
      const { error, code } = errorsCodes.BAD_REQUEST;
      defer.resolve({
        error,
        message: "Name has been used",
        code
      });
      return defer.promise;
    }

    const category = await repository.addNewCategory(validResult.value);

    defer.resolve({ category });
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Add New Category] error", err);
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


// const addNewCategory = require("./add-new-category");
