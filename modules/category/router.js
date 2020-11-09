const controller = require("./controller");
const router = require("express").Router();

router.post(
  "/add-new-category",
  controller.addNewCategory
);

router.post(
  "/check-exist-name",
  controller.checkExistName
);
router.post(
  "/get-category",
  controller.getCategory
);

module.exports = router;
