const Subcategory = include("domain/models/sub-category");

module.exports = async () => {
  let name = "t" + new Date().getTime();
  let subCategory = await Subcategory.create({
    name: name
  });
  return subCategory;
};
