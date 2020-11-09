const q = require("q");
const SubCategoryModel = include("domain/models/sub-category");

module.exports = async (params) => {
  const defer = q.defer();
  try {
    let subCategory = await SubCategoryModel.create(params);
    defer.resolve(subCategory);
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Get Sub Category] error", err);
    defer.resolve(null);
  }
  return defer.promise;
};

//const addNewUser = require("./add-new-user");
