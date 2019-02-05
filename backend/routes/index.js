const express = require("express");
const router = express.Router();
const userController = require("../app/api/controllers/User");

router.post("/user/login", userController.login);
router.post("/user/signup", userController.signup);
router.post("/user/getInfo", userController.getInfo);
module.exports = router;
