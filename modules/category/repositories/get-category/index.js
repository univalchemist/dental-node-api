const q = require("q");
const CategoryModel = include("domain/models/category");

module.exports = async ({ name }) => {
  const defer = q.defer();
  try {
    const category = await CategoryModel.findOne({ name });
    defer.resolve(category);
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Get Category] error", err);
    defer.resolve(null);
  }
  return defer.promise;
};


//const getCategory = require("./get-category");
