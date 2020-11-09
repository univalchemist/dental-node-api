const q = require("q");
const PaoModel = include("domain/models/pao");

module.exports = async ({ name }) => {
  const defer = q.defer();
  try {
    const category = await PaoModel.findOne({ name });
    defer.resolve(category);
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Get Pao] error", err);
    defer.resolve(null);
  }
  return defer.promise;
};


//const getCategory = require("./get-category");
