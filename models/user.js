const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    position: {
      type: String,
      enum: ["SELF-REGISTERED", "ADMIN-REGISTERED"],
      default: "SELF-REGISTERED",
    },
  },
  {
    timestamps: true,
  }
);
/**************************************** */
module.exports = mongoose.model("User", userSchema);
/**************************************** */