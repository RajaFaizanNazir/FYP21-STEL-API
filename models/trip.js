const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
const tripSchema = new Schema(
  {
    number: { type: Number },
    startTime: { type: Date },
    bus: { type: mongoose.Types.ObjectId, ref: "Trip" },
    route: { type: mongoose.Types.ObjectId, ref: "User" },
    status: {
      type: String,
      enum: ["Started", "Completed", "Canceled", "Pending"],
      default: 0,
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
