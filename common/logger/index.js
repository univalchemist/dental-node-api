const config = require("../config");
const _ = require("lodash");
const { serializeError } = require("serialize-error");
const logger = require("./logger");
const Utils = require("../utils");

function getCommonInfo() {
  return {
    env: config.env
  };
}

function getRequestMetaData(req, res) {
  let data = {
    url: req.url,
    method: req.method,
    ip: req.headers["x-forwarded-for"] || req.connection.remoteAddress,
    userAgent: req.headers["user-agent"]
  };

  if (req.user) {
    data.userId = req.user._id;
    data.userEmail = req.user.email;
    data.userName = req.user.first_name + " " + req.user.last_name;
  }

  return data;
}

function _serializeErrorLog(err) {
  if (Utils.isAxiosErrorResponse(err)) {
    err = Utils.shortenAxiosError(err);
  }
  return serializeError(err);
}

function buildLogMetaData(data = {}, request, response) {
  let log = {
    data
  };
  if (data instanceof Error) {
    log.data = {};
    log.data.error = data instanceof Error ? _serializeErrorLog(data) : data;
  } else if (data.error && data.error instanceof Error) {
    log.data.error = _serializeErrorLog(log.data.error);
  }

  if (request && response) {
    log = _.merge(log, getRequestMetaData(request, response));
  }
  log = _.merge(log, getCommonInfo());
  return log;
}

module.exports = {
  async close(message = "Bye", data, req, res) {
    logger.log("info", message, buildLogMetaData(data, req, res));
    return logger.waitForTransports();
  },
  log(message, data, level = "info", req, res) {
    logger.log(level, message, buildLogMetaData(data, req, res));
  },
  info(message, data, req, res) {
    logger.info(message, buildLogMetaData(data, req, res));
  },
  error(message, data, req, res) {
    logger.error(message, buildLogMetaData(data, req, res));
  },
  debug(message, data, req, res) {
    logger.debug(message, buildLogMetaData(data, req, res));
  },
  warn(message, data, req, res) {
    logger.warn(message, buildLogMetaData(data, req, res));
  }
};
