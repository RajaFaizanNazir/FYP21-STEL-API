const express = require("express");
/**************************************** */
const usersController = require("../controllers/users-controllers");
const validator = require("../middleware/validate");
/**************************************** */
const router = express.Router();
/**************************************** */
router.get("/getUsers", usersController.getUsers);
/**************************************** */
router.post("/signup", usersController.signup);
/**************************************** */
router.post("/login", validator.credentialsValidator(), usersController.login);
/**************************************** */
router.post(
  "/updatePassword",
  validator.credentialsValidator(),
  usersController.updatePassword
);
/**************************************** */
module.exports = router;
/**************************************** */
