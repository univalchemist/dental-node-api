const q = require("q");
const BrandModel = include("domain/models/brand");

module.exports = async (params) => {
  const defer = q.defer();
  try {
    const brand = await BrandModel.create(params);
    if(brand) {
      defer.resolve(brand);
    } else {
      defer.resolve(null);
    }
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Add New Brand] error", err);
    defer.resolve(null);
  }
  return defer.promise;
};
