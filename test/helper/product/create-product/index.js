const createCategory = include("test/helper/category/create-category");
const createSubCategory = include("test/helper/sub-category/create-sub-category");
const createPao = include("test/helper/pao/create-pao");
const createRic = include("test/helper/ric/create-ric");
const ProductModel = include("domain/models/product");
const createBrand = include("test/helper/brand/create-brand");

module.exports = async () => {
  const brand = await createBrand();
  const category = await createCategory();
  const subCategory = await createSubCategory();
  const pao = await createPao();
  const ric = await createRic();
  const brandName = brand._id;
  const name = "Name" + new Date().getTime();
  const data = {
    name,
    brandName,
    size: 20,
    unit: "ml",
    quantity: 10,
    category: category._id,
    subCategory: subCategory._id,
    pao: pao._id,
    ric: ric._id,
    icon: "Icon"
  };
  return ProductModel.create(data);
};
