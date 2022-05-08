const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
const tripSchema = new Schema(
  {
    number: { type: Number },
    startTime: { type: Date },
    bus: { type: mongoose.Types.ObjectId, ref: "Trip" },
    route: { type: mongoose.Types.ObjectId, ref: "User" },
    driver: { type: mongoose.Types.ObjectId, ref: "Driver" },
    status: {
      type: String,
      enum: ["Started", "Completed", "Canceled", "Pending"],
      default: "Pending",
    },
    // stats: { type: mongoose.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);
/**************************************** */
module.exports = mongoose.model("Trip", tripSchema);
/**************************************** */
