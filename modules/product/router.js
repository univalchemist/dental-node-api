const controller = require("./controller");
const router = require("express").Router();

router.post(
  "/add-new-product",
  controller.addNewProduct
);
router.put(
  "/edit-product/:id",
  controller.editProduct
);
router.delete(
  "/delete-product/:id",
  controller.deleteProduct
);
router.put(
  "/:id/archive",
  controller.archive
);
router.put(
  "/:id/un-archive",
  controller.unArchive
);
router.put(
  "/:id/start-use-product",
  controller.startUseProduct
);
router.put(
  "/:id/stop-use-product",
  controller.stopUseProduct
);

module.exports = router;
