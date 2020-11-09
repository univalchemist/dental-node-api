const q = require("q");
const GroupModel = include("domain/models/group");

module.exports = async (name) => {
  const defer = q.defer();
  try {
    const group = await GroupModel.findOne({name});
    defer.resolve(group);
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Get Group By Name] error", err);
    defer.resolve(null);
  }
  return defer.promise;
};


//const getGroupByName = require("./get-group-by-name");
