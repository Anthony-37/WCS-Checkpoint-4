const express = require("express");
const QuantityController = require("../controllers/QuantityController");

const router = express.Router();

router.get("/", QuantityController.browse);
router.get("/:id", QuantityController.read);
router.post("/", QuantityController.add);
router.put("/:id", QuantityController.edit);
router.delete("/:id", QuantityController.delete);

module.exports = router;
