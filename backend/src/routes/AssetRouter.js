const express = require("express");
const Asset = require("../controllers/AssetController");

const router = express.Router();

router.get("/", Asset.browse);
router.get("/:id", Asset.read);
router.post("/", Asset.add);
router.put("/:id", Asset.edit);
router.delete("/:id", Asset.delete);

module.exports = router;
