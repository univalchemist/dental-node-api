module.exports = (req, res, next) => {
  let { body } = req;

  if (body.email) {
    body.email = body.email.trim().toLowerCase();
  }
  if (body.username) {
    body.username = body.username.trim().toLowerCase();
    body.usernameSort = body.username.trim().toLowerCase();
  }

  next();
};
