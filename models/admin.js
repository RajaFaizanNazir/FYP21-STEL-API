const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
/**************************************** */
const adminSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    phone: { type: Number },
    organization: { type: mongoose.Types.ObjectId, ref: "Organization" },
    profilePicture: { type: String },
    // stats: { type: mongoose.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);
/**************************************** */
module.exports = mongoose.model("Admin", adminSchema);
/**************************************** */
