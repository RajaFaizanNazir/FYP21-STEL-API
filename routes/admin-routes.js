const express = require("express");
/**************************************** */
const usersController = require("../controllers/users-controllers");
const adminController = require("../controllers/admin-controllers");
const validator = require("../middleware/validate");
/**************************************** */
const router = express.Router();
/**************************************** */
router.get("/users", usersController.getUsers);
/**************************************** */
router.get("/admins", adminController.getAdmins);
/**************************************** */
router.post(
  "/userByEmail",
  validator.emailValidator(),
  usersController.getUsersByEmail
);
/**************************************** */
router.post(
  "/adminByEmail",
  validator.emailValidator(),
  adminController.getAdminByEmail
);
/**************************************** */
router.post("/addUser", validator.credentialsValidator(), usersController.signup);
/**************************************** */
router.post("/signup", validator.credentialsValidator(), adminController.signup);
/**************************************** */
router.post("/login", validator.credentialsValidator(), adminController.login);
/**************************************** */
router.post(
  "/updateUserPassword",
  validator.credentialsValidator(),
  usersController.updatePassword
);
/**************************************** */
module.exports = router;
/**************************************** */
