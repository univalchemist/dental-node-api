const app = require("./app");
const config = require("./common/config");

let port = config.server.port;
const environment = config.env;

app.on("ready", () => {
  app.listen(port, () => {
    log.info(
      `Server is ready at ${config.server.url}, listening on port ${port}, ${environment} environment`
    );
  });
});
