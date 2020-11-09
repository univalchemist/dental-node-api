const controller = require("./controller");
const router = require("express").Router();

router.post(
  "/get-pao-by-name",
  controller.getPaoByName
);

module.exports = router;
