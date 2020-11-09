const ProductModel = include("domain/models/product");

module.exports = async (id) => {
  return ProductModel.findOne({ _id: id });
};
