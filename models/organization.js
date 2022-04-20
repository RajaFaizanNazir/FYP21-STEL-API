const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
/**************************************** */
const organizationSchema = new Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    phone: { type: Number },
    transportManagers: [{ type: mongoose.Types.ObjectId, ref: "Admin" }],
    buses: [{ type: mongoose.Types.ObjectId, ref: "Bus" }],
    route: [{ type: mongoose.Types.ObjectId, ref: "Route" }],
    users: [{ type: mongoose.Types.ObjectId, ref: "User" }],
    profilePicture: { type: String },
    // stats: { type: mongoose.Types.ObjectId },
  },
  {
    timestamps: true,
  }
);
/**************************************** */
module.exports = mongoose.model("Organization", organizationSchema);
/**************************************** */
