const BrandModel = include("domain/models/brand");

module.exports = async (id) => {
  try {
    return await BrandModel.findOne({id});
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Get Brand By Id] error", err);
    defer.resolve({success: false});
  }
  return defer.promise;
};


//const getBrandById = require("./get-brand-by-id");
