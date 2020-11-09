const config = include("common/config/");
const sgMail = require("@sendgrid/mail");
const ejs = require("ejs");
const fs = require("fs");
const q = require("q");

const { isTrue, normalizeMongooseDoc } = include("common/helper/generalHelper");
module.exports = async (
  template,
  param,
  to,
  subject,
  from = "Email <no-reply@example.com>"
) => {
  const defer = q.defer();
  let env = config.env;
  let email = to;
  switch (env) {
    case "test":
      defer.resolve({ error: "Ignore mail sending on test env" });
      return defer.promise;
    default:
      break;
  }
  if (!param) {
    defer.resolve({ error: "Cannot send empty email data" });
    return defer.promise;
  }
  if (isTrue(process.env.IGNORE_EMAIL_SENDER)) {
    log.info("Mail sender was disable", process.env.IGNORE_EMAIL_SENDER);
    defer.resolve({ error: "Mail sender was disable" });
    return defer.promise;
  }

  try {
    let data = normalizeMongooseDoc(param);
    let server = process.env.EMAIL_REDIRECT_URL || "https://example.com";
    if (server !== "localhost") {
      var prefix = "https://";
      if (server.substr(0, prefix.length) !== prefix) {
        server = prefix + server;
      }
    } else {
      server = "http://localhost:3000";
    }
    data = Object.assign({}, data, { server });
    let html = ejs.render(fs.readFileSync(template, "utf-8"), data);
    let msg = {
      from,
      to,
      subject,
      html
    };

    sgMail.setApiKey(config.sendgrid.apiKey);

    let result = await sgMail.send(msg);
    defer.resolve(result);
    return defer.promise;
  } catch (err) {
    log.error(`Error parsing ejs template ${err}`);
    defer.resolve(err);
  }

  return defer.promise;
};

// const sendMail = require("./send-mail");
