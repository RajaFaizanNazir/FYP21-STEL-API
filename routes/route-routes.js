const express = require("express");
/**************************************** */
const routeController = require("../controllers/route-controllers");
const validator = require("../middleware/validate");
/**************************************** */
const router = express.Router();
/**************************************** */
router.get("/routes", routeController.getRoutes);
/**************************************** */
router.post("/addRoute", routeController.addRoute);
/**************************************** */
router.post(
  "/updateRoute"
);
/**************************************** */
module.exports = router;
/**************************************** */