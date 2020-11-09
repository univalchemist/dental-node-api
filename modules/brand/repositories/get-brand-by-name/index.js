const q = require("q");
const BrandModel = include("domain/models/brand");

module.exports = async ({ name }) => {
  const defer = q.defer();
  try {
    const brand = await BrandModel.findOne({ name });
    defer.resolve(brand);
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Get Brand By Name] error", err);
    defer.resolve(null);
  }
  return defer.promise;
};

//const getBrandByName = require("./get-brand-by-name");
