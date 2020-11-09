const RIC = include("domain/models/ric");

module.exports = async () => {
  let name = "t" + new Date().getTime();
  let subCategory = await RIC.create({
    name: name
  });
  return subCategory;
};
