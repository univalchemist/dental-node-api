const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const checkIsExistGroup = require("../check-is-exist-group");

module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  const { body } = params;
  try {
    const validResult = await validator.validateAddNewGroupData(body);
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }
    const checkExistGroup = await checkIsExistGroup(
      validResult.value,
      validator,
      repository,
      cacheService
    );
    if(checkExistGroup.isExist) {
      const { error, code } = errorsCodes.BAD_REQUEST;
      defer.resolve({
        error,
        message: "Group name has been used",
        code
      });
    } else {
      const group = await repository.addNewGroup(validResult.value);
      defer.resolve({group});
    }
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Add New Group] error", err);
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


// const addNewGroup = require("./add-new-group");
