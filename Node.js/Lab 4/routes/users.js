const express = require("express");
const router = express.Router();

const { register, login, getHomePage } = require("../controllers/userHanlder");

router.route(["/", "/homepage"]).get(getHomePage);
router.route("/signup").post(register);
router.route("/login").post(login);

module.exports = router;
