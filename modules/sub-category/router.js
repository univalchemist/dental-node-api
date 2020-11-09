const controller = require("./controller");
const router = require("express").Router();

router.post(
  "/get-sub-category",
  controller.getSubCategory
);

router.post(
  "/add-new-sub-category",
  controller.addNewSubCategory
);

module.exports = router;
