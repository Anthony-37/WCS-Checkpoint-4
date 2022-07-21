const express = require("express");
const UserAdminController = require("../controllers/UserAdminController");

const router = express.Router();

router.get("/", UserAdminController.browse);
router.get("/:id", UserAdminController.read);
router.post("/", UserAdminController.add);
router.put("/:id", UserAdminController.edit);
router.delete("/:id", UserAdminController.delete);

module.exports = router;
