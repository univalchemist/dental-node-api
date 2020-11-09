const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "!#($!H@V!#$(V!))";

module.exports = {
  sign: profileId =>
    jwt.sign(
      {
        profileId
      },
      secret
    ),
  verify: token => jwt.verify(token, secret)
};
