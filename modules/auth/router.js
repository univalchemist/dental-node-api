const controller = require("./controller");
const router = require("express").Router();

router.post("/sign-in", controller.signIn);
router.post("/sign-up", controller.signUp);
router.post("/check-exist-email", controller.checkExistEmail);
router.post("/forgot-password", controller.forgotPassword);
router.post("/check-exist-username", controller.checkExistUsername);
module.exports = router;
