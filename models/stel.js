const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
const stelSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    phone: { type: Number, unique: true },
    address: { type: String },
    socialMedia: [
      { instagram: { type: String } },
      { facebook: { type: String } },
      { twitter: { type: String } },
      { linkedIn: { type: String } },
      { reddit: { type: String } },
    ],
    // stats: { type: mongoose.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);
/**************************************** */
module.exports = mongoose.model("stel", stelSchema);
/**************************************** */
