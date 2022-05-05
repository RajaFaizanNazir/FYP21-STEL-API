const HttpError = require("../util/http-error");
const Driver = require("../models/driver");
const validator = require("../middleware/validate");
/**************************************** */
const getDrivers = async (req, res, next) => {
  let drivers;
  try {
    drivers = await Driver.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching Admins failed, please try again later." + err,
      500
    );
    return next(error);
  }
  res.json({ Drivers: drivers });
};
/**************************************** */
const addDriver = async (req, res, next) => {
  const errors = validator.validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { name, phone, cnic, license, experience } = req.body;

  let existingDriver;
  try {
    existingDriver = await Driver.findOne({ cnic: cnic });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later." + err,
      500
    );
    return next(error);
  }

  if (existingDriver) {
    const error = new HttpError(
      "Driver exists already, please add another driver instead.",
      422
    );
    return next(error);
  }

  const createdDriver = new Driver({
    name,
    phone,
    cnic,
    license,
    experience,
  });

  try {
    await createdDriver.save();
  } catch (err) {
    const error = new HttpError(
      "Signing up failed while saving, please try again later" + err,
      500
    );
    return next(error);
  }
  console.log(createdDriver);
  res.status(201).json({ createdDriver });
};
/**************************************** */
module.exports = {
  getDrivers,
  addDriver,
};
/**************************************** */
