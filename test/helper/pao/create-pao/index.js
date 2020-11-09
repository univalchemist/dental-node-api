const PAO = include("domain/models/pao");

module.exports = async () => {
  let name = "t" + new Date().getTime();
  let subCategory = await PAO.create({
    name: name
  });
  return subCategory;
};
