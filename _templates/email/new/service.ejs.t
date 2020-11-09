---
to: modules/<%= h.changeCase.paramCase(module) %>/services/<%= h.changeCase.paramCase(name) %>/index.js
---

const q = require("q");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (params, validator, repository, cacheService) => {
  const defer = q.defer();
  const { body, user } = params
  try {
    const validResult = await validator.validate<%= h.changeCase.pascalCase(name) %>Data(body);
    if (validResult.error) {
      defer.resolve({
        error: "VALIDATION_ERROR",
        message: validResult.error,
        code: 400
      });
      return defer.promise;
    }
    defer.resolve({});
  } catch (err) {
    log.error("[SERVICE][EXECEPTION][<%= h.changeCase.title(name) %>] error", err);
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



static async <%= h.changeCase.camel(name) %>(params) {
  return services.<%= h.changeCase.camel(name) %>(params, validator, repository, cacheService);
}


// const <%= h.changeCase.camel(name) %> = require("./<%= h.changeCase.paramCase(name) %>");
