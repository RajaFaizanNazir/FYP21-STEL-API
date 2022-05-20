const HttpError = require("../util/http-error");
const Route = require("../models/route");
const validator = require("../middleware/validate");
/**************************************** */
const getRoutes = async (req, res, next) => {
  let routes;
  try {
    routes = await Route.find();
  } catch (err) {
    const error = new HttpError(
      "Fetching routes failed, please try again later." + err,
      500
    );
    return next(error);
  }
  res.json({
    routes: routes
  });
};
/**************************************** */
const addRoute = async (req, res, next) => {
  const errors = validator.validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invalid inputs passed, please check your data.", 422)
    );
  }

  const {
    number,
    from,
    to
  } = req.body;

  let existingRoute;
  try {
    existingRoute = await Route.findOne({
      number: number
    });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later." + err,
      500
    );
    return next(error);
  }

  if (existingRoute) {
    const error = new HttpError(
      "Route exists already.",
      422
    );
    return next(error);
  }

  const createdRoute = new Route({
    number,
    from,
    to,
  });

  try {
    await createdRoute.save();
  } catch (err) {
    const error = new HttpError(
      "Signing up failed while saving, please try again later" + err,
      500
    );
    return next(error);
  }

  res.status(201).json({
    userId: createdRoute.id,
    number: createdRoute.number
  });
};
/**************************************** */
module.exports = {

  addRoute,
  getRoutes
};
/**************************************** */