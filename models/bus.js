const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
const busSchema = new Schema(
  {
    busnumber: { type: Number, unique: true },
    chasenumber: { type: String, unique: true },
    capacity: { type: Number },
    ac: { type: String, enum: ["ac", "non-ac"], default: "non-ac" },
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
