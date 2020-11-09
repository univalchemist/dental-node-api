const controller = require("./controller");
const router = require("express").Router();

router.post("/sign-in", controller.signIn);

module.exports = router;
