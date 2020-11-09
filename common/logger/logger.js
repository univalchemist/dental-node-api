const { createLogger, format, transports } = require("winston");
const { isTrue } = include("common/helper/generalHelper");
const config = require("../config");

const SLEEP_BEFORE_FINISH = 3000;
const { sleep } = include("common/helper/generalHelper");
const _ = require("lodash");

const logger = createLogger({
  exitOnError: _.get(config, "logger.exitOnError", false),
  expressFormat: true,
  meta: true,
  msg: "HTTP {{req.method}} {{req.url}}"
});

const addAppMetadata = format(info => {
  info.environment = config.env;
  info.appName = config.appName;
  info.appVersion = config.version;
  info.appId = config.appId;
  return info;
});

const loggerFormatter = format.combine(
  format.timestamp(),
  addAppMetadata(),
  format.printf(info => {
    let msg = `${info.timestamp} ${info.level}: ${
      typeof info.message === "object"
        ? JSON.stringify(info.message)
        : info.message
    }`;
    if (info.code) {
      msg += ` error code: ${info.code}`;
    }
    if (info.name) {
      msg += ` error: ${info.name}`;
    }
    if (info.parent) {
      msg += ` parent: ${JSON.stringify(info.parent)}`;
    }

    return msg;
  })
);

const consoleLoggerFormatter = format.combine(
  format.timestamp(),
  addAppMetadata(),
  format.printf(info => {
    let msg = `${info.timestamp} ${info.level}: ${
      typeof info.message === "object"
        ? JSON.stringify(info.message)
        : info.message
    }`;
    if (info.code) {
      msg += ` error code: ${info.code}`;
    }
    if (info.name) {
      msg += ` error: ${info.name}`;
    }
    if (info.parent) {
      msg += ` parent: ${JSON.stringify(info.parent)}`;
    }

    if (info.data) {
      if (_.isEmpty(info.data)) {
        //ignore
      } else {
        msg += ` data: ${JSON.stringify(info.data)}`;
      }
    }
    return msg;
  })
);

if (isTrue(_.get(config, "logger.useConsole", false))) {
  logger.add(
    new transports.Console({
      colorize: true,
      level: config.logger.consoleLevel,
      handleExceptions: config.logger.consoleHandleExceptions
    })
  );
  logger.format = consoleLoggerFormatter;
}

logger.waitForTransports = async () => {
  await sleep(SLEEP_BEFORE_FINISH);
  const transportsFinished = logger.transports.map(t => {
    return new Promise((resolve, reject) => {
      t.on("finish", resolve);
      t.on("error", reject);
    });
  });
  logger.end();
  return Promise.all(transportsFinished);
};

logger.stream = {
  write: function(message, _) {
    console.log("streaming ", message);
    logger.info(message);
  }
};
module.exports = logger;
