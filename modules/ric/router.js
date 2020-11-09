const controller = require("./controller");
const router = require("express").Router();

router.post(
  "/get-ric-by-name",
  controller.getRicByName
);

module.exports = router;
