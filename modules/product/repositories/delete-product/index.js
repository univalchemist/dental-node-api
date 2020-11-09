const q = require("q");
const ProductModel = include("domain/models/product");

module.exports = async (id) => {
  const defer = q.defer();
  try {
    return await ProductModel.deleteOne({_id: id});
  } catch (err) {
    log.error("[REPOSITORY][EXCEPTION][Delete Product] error", err);
    defer.resolve({success: false});
  }
  return defer.promise;
};

//const deleteProduct = require("./delete-product");
