module.exports = (req, res, next) => {
  var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  const requestLog = [
    req.method,
    fullUrl,
    res.statusCode || "-",
    req.headers["user-agent"]
  ].join(" ");

  log.info(requestLog);

  next();
};
