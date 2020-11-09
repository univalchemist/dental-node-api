const requestLogger = require("morgan");
const chalk = require("chalk");
const _ = require("lodash");
const conf = include("common/config");
module.exports = requestLogger(function(tokens, req, res) {
  const yellow = "e0fc05";
  const red = "b00505";
  const green = "2ed573";
  const env = conf.env;
  let status = tokens.status(req, res);
  let statusCode = yellow;

  if (_.inRange(status, 200, 399)) {
    statusCode = green;
  } else if (_.inRange(status, 400, 599)) {
    statusCode = red;
  }
  return [
    chalk.hex(green).bold("💪 API " + env + " 💪"),
    chalk.hex(statusCode).bold(tokens.method(req, res)),
    chalk.hex(statusCode).bold(tokens.status(req, res)),
    chalk.hex("#fffa65")(tokens.url(req, res)),
    chalk.hex(statusCode).bold(tokens["response-time"](req, res) + " ms"),
    chalk.hex("#f78fb3").italic("@ " + tokens.date(req, res)),
    chalk.hex("#fffa65")("from " + tokens.referrer(req, res)),
    chalk.hex("#f78fb3")(tokens["user-agent"](req, res))
  ].join(" ");
});
