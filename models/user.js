const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    gender: { type: String, required: true, enum: ["male", "female"] },
    phone: { type: Number, unique: true },
    address: { type: String },
    organization: { type: mongoose.Types.ObjectId, ref: "Organization" },
    secondaryPhone: { type: Number },
    secondaryEmail: { type: String },
    profilePicture: { type: String },
    verified: {
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
module.exports = mongoose.model("User", userSchema);
/**************************************** */
