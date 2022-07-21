const express = require("express");
const ProfilRoyalFamilyController = require("../controllers/ProfilRoyalFamilyController");

const router = express.Router();

router.get("/", ProfilRoyalFamilyController.browse);
router.get("/:id", ProfilRoyalFamilyController.read);

module.exports = router;
