const controller = require("./controller");
const router = require("express").Router();

router.post("/upload-avatar", controller.uploadAvatar);

module.exports = router;
