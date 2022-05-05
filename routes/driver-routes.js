const express = require("express");
/**************************************** */
const driverController = require("../controllers/driver-controllers");
const validator = require("../middleware/validate");
/**************************************** */
const router = express.Router();
/**************************************** */
router.get("/drivers", driverController.getDrivers);
/**************************************** */
router.post(
  "/addDriver",
  [
    validator.nameValidator(),
    validator.phoneValidator(),
    validator.cnicValidator(),
    validator.licenseValidator(),
    validator.experienceValidator(),
  ],
  driverController.addDriver
);
/**************************************** */
module.exports = router;
/**************************************** */
