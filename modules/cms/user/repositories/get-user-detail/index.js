const q = require("q");

module.exports = async params => {
  const defer = q.defer();
  try {
    defer.resolve({ success: true });
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Get User Detail] error", err);
    defer.resolve({ success: false });
  }
  return defer.promise;
};

//const getUserDetail = require("./get-user-detail");
