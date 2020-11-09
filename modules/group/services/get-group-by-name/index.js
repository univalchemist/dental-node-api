module.exports = async (params, validator, repository, cacheService) => {
  const { name } = params;
  return await repository.getGroupByName(name);
};


// const getGroupByName = require("./get-group-by-name");
