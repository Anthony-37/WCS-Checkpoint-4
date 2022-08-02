const express = require("express");
const Auth = require("../controllers/AuthController");

const router = express.Router();

router.post("/login", Auth.login);
router.get("/logout", Auth.logout);

module.exports = router;
