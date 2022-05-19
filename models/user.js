const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    phone: { type: Number },
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
