const q = require("q");
const forgotPasswordEmailTemplate = "views/email/forgot-password.ejs";
const sendMail = require("../send-mail");

module.exports = (email, data) => {
  const defer = q.defer();
  try {
    sendMail(
      forgotPasswordEmailTemplate,
      data,
      email,
      "Forgot password request"
    );
    defer.resolve({ success: true });
  } catch (err) {
    console.log("Error send mail forgot password", err);

    defer.resolve({ success: false });
  }

  return defer.promise;
};
