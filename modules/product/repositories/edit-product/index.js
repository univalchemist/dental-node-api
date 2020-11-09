const q = require("q");
const ProductModel = include("domain/models/product");

module.exports = async ({id, data}) => {
  const defer = q.defer();
  try {
    const updateProduct = await ProductModel.updateMany({_id: id}, {...data});
    if(updateProduct.nModified) {
      defer.resolve({isUpdate: true});
    } else {
      defer.resolve({isUpdate: false});
    }
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Edit Product] error", err);
    defer.resolve(null);
  }
  return defer.promise;
};


//const editProduct = require("./edit-product");
