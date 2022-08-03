const express = require("express");
const Asset = require("../controllers/AssetController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", Asset.browse);
router.get("/:id", Asset.read);
router.post("/", auth, Asset.add);
router.put("/:id", auth, Asset.edit);
router.delete("/:id", auth, Asset.delete);

module.exports = router;
