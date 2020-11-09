const JWT = include("modules/auth/services/JWT");
const { parseObjectId } = include("common/helper/generalHelper");
module.exports = user => {
  let token = JWT.sign(parseObjectId(user));
  return {
    "x-access-token": token
  };
};

// const authHeader = include("test/helper/auth/auth-header");
