module.exports = async (id, validator, repository, cacheService) => {
  return await repository.getBrandById(id);
};


// const getBrandById = require("./get-brand-by-id");
