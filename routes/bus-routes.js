const express = require("express");
/**************************************** */
const busController = require("../controllers/bus-controllers");
const validator = require("../middleware/validate");
/**************************************** */
const router = express.Router();
/**************************************** */
router.get("/buses", busController.getBuses);
/**************************************** */
router.post(
  "/addBus",
  [
    validator.busNumberValidator(),
    validator.busChaseNumberValidator(),
    validator.busCapacityValidator(),
    validator.busMillageValidator(),
    validator.busAcValidator(),
  ],
  busController.addBus
);
/**************************************** */
module.exports = router;
/**************************************** */
