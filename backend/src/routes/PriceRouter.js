const express = require("express");
const Price = require("../controllers/PriceController");

const router = express.Router();

router.get("/", Price.browse);
router.get("/:id", Price.read);
router.post("/", Price.add);
router.put("/:id", Price.edit);
router.delete("/:id", Price.delete);

module.exports = router;
