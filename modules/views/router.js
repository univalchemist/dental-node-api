const controller = require("./controller");
const router = require("express").Router();

router.get("/reset-password", controller.resetPassword);

router.get("/confirm-reset-password", controller.confirmResetPassword);
module.exports = router;
