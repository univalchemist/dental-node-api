const q = require("q");
const ProductModel = include("domain/models/product");

module.exports = async (id) => {
  const defer = q.defer();
  try {
    return await ProductModel.findOne({_id: id});
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Get Product By Id] error", err);
    defer.resolve({success: false});
  }
  return defer.promise;
};


//const getProductById = require("./get-product-by-id");
