const express = require("express");
const Price = require("../controllers/PriceController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", Price.browse);
router.get("/:id", Price.read);
router.post("/", auth, Price.add);
router.put("/:id", auth, Price.edit);
router.delete("/:id", auth, Price.delete);

module.exports = router;
