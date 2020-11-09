const q = require("q");
const RicModel = include("domain/models/ric");

module.exports = async ({ name }) => {
  const defer = q.defer();
  try {
    const ric = RicModel.findOne({ name });
    defer.resolve(ric);
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Get Ric By Name] error", err);
    defer.resolve(null);
  }
  return defer.promise;
};


//const getRicByName = require("./get-ric-by-name");
