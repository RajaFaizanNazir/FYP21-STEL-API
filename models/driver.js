const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
const driverSchema = new Schema(
  {
    name: { type: String },
    phone: { type: Number },
    identiy: { type: Number, unique: true },
    license: { type: String, unique: true },
    experience: { type: Number, default: 0 },
    organization: { type: mongoose.Types.ObjectId, ref: "Organization" },
    profilePicture: { type: String },
    status: {
      type: Boolean,
      enum: [0, 1],
      default: 0,
    },
    // stats: { type: mongoose.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);
/**************************************** */
module.exports = mongoose.model("Driver", driverSchema);
/**************************************** */
