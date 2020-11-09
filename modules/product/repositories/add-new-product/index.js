const q = require("q");
const ProductModel = include("domain/models/product");

module.exports = async (params) => {
  const defer = q.defer();
  try {
    let product = await ProductModel.create(params);
    if (product) {
      defer.resolve(product);
    } else {
      defer.resolve(null);
    }
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Add New Product] error", err);
    defer.resolve(null);
  }
  return defer.promise;
};
