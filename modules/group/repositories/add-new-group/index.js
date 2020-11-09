const q = require("q");
const GroupModel = include("domain/models/group");

module.exports = async (params) => {
  const defer = q.defer();
  try {
    const product = await GroupModel.create(params);
    defer.resolve(product);
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Add New Group] error", err);
    defer.resolve(null);
  }
  return defer.promise;
};


//const addNewGroup = require("./add-new-group");
