const controller = require("./controller");
const router = require("express").Router();

router.get("/get-profile", controller.getProfile);
module.exports = router;
