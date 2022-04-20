const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
const busSchema = new Schema(
  {
    number: { type: Number },
    plate: { type: String, unique: true },
    ac: { type: Boolean, enum: [0, 1], default: 0 },
    driver: { type: mongoose.Types.ObjectId, ref: "Driver" },
    millage: { type: Number, default: 0 },
    serviceGap: { type: Number, default: 2000 },
    lastService: { type: Date },
    organization: { type: mongoose.Types.ObjectId, ref: "Organization" },
    profilePicture: { type: String },
    active: {
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
module.exports = mongoose.model("Bus", busSchema);
/**************************************** */
