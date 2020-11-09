global.absolutePath = p => {
  return path.join(__dirname, p);
};
global.include = localModule => {
  return require(global.absolutePath(localModule));
};
const dotenv = require("dotenv");
dotenv.config({ silent: true });
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const controllers = include("modules");
const app = express();
const middleware = require("./middlewares");
const config = require("./common/config");
const logger = require("./common/logger");
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(cors());
if (config.env !== "production") {
  app.use(middleware.requestLoggerMorgan);
} else {
  app.use(middleware.requestLogger);
}

global.log = logger;

app.use(express.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ limit: "100mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "100mb",
    extended: true,
    parameterLimit: 50000
  })
);
app.use(cookieParser());

mongoose.set("useCreateIndex", true);
mongoose.connect(config.db, { useNewUrlParser: true });

mongoose.connection.once("open", () => {
  log.info("Database connected");
  app.emit("ready");
});

controllers(app);
const client = path.join(__dirname, "build");
app.use(express.static(client));
app.get("/*", (req, res, next) => {
  if (req.url.startsWith("/api") || req.url.startsWith("/views")) {
    next();
  } else {
    res.sendFile(path.join(client, "index.html"));
  }
});
app.emit("ready");
module.exports = app;
