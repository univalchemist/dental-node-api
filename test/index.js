"use strict";

const app = require("../app");
const mongoose = require("mongoose");
const config = include("common/config");

before(done => {
  app.on("ready", () => {
    log.info("App is ready for testing");
    global.server = app.listen(3131, () => {
      log.info("Server is ready for testing");
      console.log("config.db", config.db);
      done();
      if (!config.db.includes("_test")) {
        done();
        return;
      }
      mongoose.connection.db.dropDatabase(err => {
        if (err) {
          throw new Error(`Cannot drop database for testing ${err}`);
        }

        log.info(`Database sucessfully dropped for testing`);

        done();
      });
    });
  });
});

require("./modules/");
