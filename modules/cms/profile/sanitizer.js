module.exports = (req, res, next) => {
  let { body } = req;

  if (body.email) {
    body.email = body.email.trim().toLowerCase();
  }

  if (body.page) {
    body.page = parseInt(body.page);
  }

  if (body.perPage) {
    body.perPage = parseInt(body.perPage);
  }

  next();
};
