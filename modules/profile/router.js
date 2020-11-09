const controller = require("./controller");
const router = require("express").Router();

router.get("/", controller.getProfile);
router.put(
  "/edit-profile",
  controller.editProfile
);
router.put(
  "/change-password",
  controller.changePassword
);

module.exports = router;
