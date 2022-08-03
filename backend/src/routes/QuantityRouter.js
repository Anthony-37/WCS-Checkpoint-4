const express = require("express");
const QuantityController = require("../controllers/QuantityController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", QuantityController.browse);
router.get("/:id", QuantityController.read);
router.post("/", auth, QuantityController.add);
router.put("/:id", auth, QuantityController.edit);
router.delete("/:id", auth, QuantityController.delete);

module.exports = router;
