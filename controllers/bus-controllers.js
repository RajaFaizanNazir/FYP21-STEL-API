const HttpError = require("../util/http-error");
const Bus = require("../models/bus");
const validator = require("../middleware/validate");
/**************************************** */
const getBuses = async (req, res, next) => {
  let buses;
  try {
    buses = await Bus.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching Bus failed, please try again later." + err,
      500
    );
    return next(error);
  }
  res.json({ Buses: buses });
};
/**************************************** */
const addBus = async (req, res, next) => {
  const errors = validator.validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { busnumber, chasenumber, capacity, millage, ac } = req.body;

  let existingBus;
  try {
    existingBus = await Bus.findOne({ busnumber: busnumber });
  } catch (err) {
    const error = new HttpError(
      "Adding Bus failed, please try again later." + err,
      500
    );
    return next(error);
  }

  if (existingBus) {
    const error = new HttpError(
      "Bus exists already, please add another Bus instead.",
      422
    );
    return next(error);
  }

  const createdBus = new Bus({ busnumber, chasenumber, capacity, millage, ac });

  try {
    await createdBus.save();
  } catch (err) {
    const error = new HttpError(
      "Signing up failed while saving, please try again later" + err,
      500
    );
    return next(error);
  }
  console.log(createdBus);
  res.status(201).json({ createdBus });
};
/**************************************** */
const updateBus = async (req, res, next) => {
  const errors = validator.validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { busnumber, chasenumber, capacity, millage, ac } = req.body;

  let existingBus;
  try {
    existingBus = await Bus.findOne({ busnumber: busnumber });
  } catch (err) {
    const error = new HttpError(
      "Adding Bus failed, please try again later." + err,
      500
    );
    return next(error);
  }

  if (existingBus) {
    const error = new HttpError(
      "Bus exists already, please add another Bus instead.",
      422
    );
    return next(error);
  }

  const createdBus = new Bus({ busnumber, chasenumber, capacity, millage, ac });

  try {
    await createdBus.findOneAndUpdate({ busnumber: busnumber }, createdBus);
  } catch (err) {
    const error = new HttpError(
      "Updating failed while saving, please try again later" + err,
      500
    );
    return next(error);
  }
  console.log(createdBus);
  res.status(201).json({ createdBus });
};
/**************************************** */
const deleteBus = async (req, res, next) => {
  const errors = validator.validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const { busnumber } = req.body;

  let existingBus;
  try {
    existingBus = await Bus.findOne({ busnumber: busnumber });
  } catch (err) {
    const error = new HttpError(
      "Adding Bus failed, please try again later." + err,
      500
    );
    return next(error);
  }

  if (!existingBus) {
    const error = new HttpError("Bus does not exits.", 422);
    return next(error);
  } else {
    Bus.deleteOne({ busnumber: busnumber });
  }

  const createdBus = new Bus({ busnumber, chasenumber, capacity, millage, ac });

  try {
    await createdBus.save();
  } catch (err) {
    const error = new HttpError(
      "Signing up failed while saving, please try again later" + err,
      500
    );
    return next(error);
  }
  console.log(createdBus);
  res.status(201).json({ createdBus });
};
/**************************************** */
module.exports = {
  getBuses,
  addBus,
  updateBus,
  deleteBus,
};
/**************************************** */
