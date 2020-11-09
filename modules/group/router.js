const controller = require("./controller");
const router = require("express").Router();

router.post(
  "/add-new-group",
  controller.addNewGroup
);

module.exports = router;
