const q = require("q");
const ProfileModel = include("domain/models/profile");

module.exports = async ({ currentPage, perPage, searchObject }) => {
  const defer = q.defer();
  try {
    const total = await ProfileModel.countDocuments({ $or: searchObject });
    const profiles = await ProfileModel.find({ $or: searchObject })
      .limit(perPage)
      .skip(currentPage * perPage);
    defer.resolve({
      list: profiles,
      total,
      page: currentPage + 1,
      limit: perPage
    });
  } catch (err) {
    log.error("[REPOSITORY][EXECEPTION][Get List User] error", err);
    defer.resolve({ success: false });
  }
  return defer.promise;
};

//const getListUser = require("./get-list-user");
