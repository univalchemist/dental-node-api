const getGroupByName = require("../get-group-by-name");

module.exports = async (params, validator, repository, cacheService) => {
  const { name } = params;
  const group = await getGroupByName(
    {name},
    validator,
    repository,
    cacheService,
  );
  if(group) {
    return { isExist: true};
  } else {
    return { isExist: false};
  }
};


// const checkIsExistGroup = require("./check-is-exist-group");
