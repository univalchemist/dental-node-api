const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  const { body, user } = params;
  try {
    const validResult = await validator.validateGetListUserData(body);
    log.info("validResult.value", validResult);
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }
    const { page, limit, query } = validResult.value;
    let currentPage = page;
    currentPage -= 1;
    let searchObject = [{}];
    if (query) {
      searchObject = [
        { email: new RegExp(query, "i") },
        { first_name: new RegExp(query, "i") },
        { last_name: new RegExp(query, "i") }
      ];
    }

    const data = await repository.getListUser({
      currentPage,
      perPage: limit || 10,
      searchObject
    });

    defer.resolve(data);
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][Get List User] error", err);
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

// const getListUser = require("./get-list-user");
