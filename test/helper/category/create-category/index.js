const Category = include("domain/models/category");

module.exports = async () => {
  let name = "t" + new Date().getTime();
  let category = await Category.create({
    name: name
  });
  return category;
};
