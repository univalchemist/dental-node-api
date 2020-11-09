const controller = require("./controller");
const router = require("express").Router();

router.post(
  "/add-new-brand",
  controller.addNewBrand
);
router.post(
  "/get-brand-by-name",
  controller.getBrandByName
);
router.post(
  "/check-exist-name",
  controller.checkExistName
);

module.exports = router;
