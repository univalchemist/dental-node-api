const Profile = include("domain/models/profile");
const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");
const JWT = include("modules/auth/services/JWT");

module.exports = async (req, res, next) => {
  let payload = {};

  const token = req.headers["x-access-token"];
  if (!token) {
    log.error(`Missing token`);
    const { error, code } = Error.UNAUTHORIZED;

    return res.status(code).json({
      error,
      message:
        "Please log in again to implement new and improved security measures."
    });
  }
  try {
    payload = await JWT.verify(token);
  } catch (err) {
    log.error(`Malformed token ${err}`);
    log.error(`Malformed token. Token input ${token}`);
    const { error, code } = errorsCodes.UNAUTHORIZED;

    return res.status(code).json({
      error,
      message:
        "Please log in again to implement new and improved security measures."
    });
  }
  const { profileId } = payload;
  try {
    let user = await Profile.findById(profileId).lean();

    if (!user) {
      const { error, code } = errorsCodes.BAD_REQUEST;
      return res.status(code).json({
        error,
        message: "User not found"
      });
    }

    user.token = token;
    req.user = user;
    return next();
  } catch (err) {
    const { error, code } = errorsCodes.SERVER_ERROR;

    log.error("[EXCEPTION][MIDDLEWARE][isAuthenticated ][1] ", err);

    return res.status(code).json({
      error,
      message: errorsMessages.SERVER_ERROR
    });
  }
};
