const BrandModel = include("domain/models/brand");

module.exports = async () => {
  const name = 'T' + new Date().getTime();
  const brand = await BrandModel.create({name});
  return brand;
};
