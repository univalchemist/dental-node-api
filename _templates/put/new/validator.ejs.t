---
to: modules/<%= h.changeCase.paramCase(module) %>/validators/<%= h.changeCase.paramCase(name) %>/index.js
---

const q = require("q");
const Joi = require("joi");

const config = include("common/config/");

const validateSchema = Joi.object({
  id: Joi.string().required()
});

module.exports = async (body) => {
  const defer = q.defer();
  const result = validateSchema.validate(body, {
    stripUnknown: true,
  });

  if (result.error) {
    log.error("[VALIDATION][EXCEPTION][<%= h.changeCase.title(name) %>] error:", result.error);
    defer.resolve({ error: result.error.message });
  } else {
    defer.resolve({success: true});
  }

  return defer.promise;
};



static async validate<%= h.changeCase.pascalCase(name) %>Data(data) {
  return validators.<%= h.changeCase.camel(name) %>(data);
}


// const <%= h.changeCase.camel(name) %> = require("./<%= h.changeCase.paramCase(name) %>");
