const Group = include("domain/models/group");

module.exports = async () => {
  let name = "t" + new Date().getTime();
  let category = await Group.create({
    name: name
  });
  return category;
};
