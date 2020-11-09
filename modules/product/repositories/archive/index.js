const ProductModel = include("domain/models/product");
const q = require("q");

module.exports = async (id) => {
  const defer = q.defer();
  try {
    const updateProduct = await ProductModel.updateOne({_id: id}, {isArchive: true});
    if(updateProduct.nModified) {
      defer.resolve({isUpdate: true});
    } else {
      defer.resolve({isUpdate: false});
    }
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Add New Product] error", err);
    defer.resolve(null);
  }
  return defer.promise;
};
