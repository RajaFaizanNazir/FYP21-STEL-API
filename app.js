process.env.TOKEN_SECRET = "blochain_gametrain";
//process.env.PORT = 5000;
/**************************************** */
const fs = require("fs");
/**************************************** */
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
/**************************************** */
const usersRoutes = require("./routes/users-routes");
const adminRoutes = require("./routes/admin-routes");
const HttpError = require("./util/http-error");
/**************************************** */
const app = express();
/**************************************** */
app.use(bodyParser.json());
/**************************************** */
/*app.use((req, res, next) => {
  res.setHeMONGO_URIader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});*/
/**************************************** */
app.use("/api/users", usersRoutes);
/**************************************** */
app.use("/api/admin", adminRoutes);
/**************************************** */
app.use((req, res, next) => {
  console.log("Could not find this route");
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});
/**************************************** */
app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});
/**************************************** */
mongoose
  .connect(
    "mongodb+srv://stel:stel-password@stel.ft3gs.mongodb.net/stel?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is up port 5000 ");
    });
  })
  .catch((err) => {
    console.log("Error connecting to cloud" + err);
  });
/**************************************** */
