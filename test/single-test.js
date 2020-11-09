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
    });
  });
});

// require("./modules/auth/controllers/sign-up");
// require("./modules/auth/controllers/check-exist-email");
// require("./modules/auth/controllers/check-exist-username");
// require("./modules/auth/controllers/sign-in");
// require("./modules/category/controllers/check-exist-name");
// require("./modules/category/controllers/add-new-category");
// require("./modules/profile/controllers/edit-profile");
require("./modules/product/controllers/stop-use-product");
