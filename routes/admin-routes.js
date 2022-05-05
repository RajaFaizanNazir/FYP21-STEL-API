const express = require("express");
/**************************************** */
const adminController = require("../controllers/admin-controllers");
const validator = require("../middleware/validate");
/**************************************** */
const router = express.Router();
/**************************************** */
router.get("/admins", adminController.getAdmins);
/**************************************** */
router.post(
  "/adminByEmail",
  validator.emailValidator(),
  adminController.getAdminByEmail
);
/**************************************** */
router.post(
  "/signup",
  [validator.nameValidator(), validator.credentialsValidator()],
  adminController.signup
);
/**************************************** */
router.post("/login", validator.credentialsValidator(), adminController.login);
/**************************************** */
module.exports = router;
/**************************************** */
