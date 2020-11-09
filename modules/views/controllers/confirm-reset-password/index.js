const errorsCodes = include("modules/error/codes");
const errorsMessages = include("modules/error/messages");

module.exports = async (req, res, service) => {
  res.render("success-forgot-password.ejs");
};
