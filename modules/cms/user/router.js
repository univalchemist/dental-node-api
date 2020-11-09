const controller = require("./controller");
const router = require("express").Router();

router.get("/get-list-user", controller.getListUser);
router.get("/get-user-detail", controller.getUserDetail);
module.exports = router;
