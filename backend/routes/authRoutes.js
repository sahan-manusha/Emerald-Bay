const express = require("express");
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/supplier/signup", authMiddleware(["ADMIN"]), authController.supplierSignup);
router.post("/login", authController.login);

module.exports = router;
