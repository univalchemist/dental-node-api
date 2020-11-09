const q = require("q");

module.exports = async params => {
  const defer = q.defer();
  try {
    defer.resolve({ success: true });
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Get Profile] error", err);
    defer.resolve({ success: false });
  }
  return defer.promise;
};

//const getProfile = require("./get-profile");
