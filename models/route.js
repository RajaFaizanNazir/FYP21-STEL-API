const mongoose = require("mongoose");
/**************************************** */
const Schema = mongoose.Schema;
const routeSchema = new Schema({
  number: {
    type: Number,
    unique: true
  },
  from: {
    type: String
  },
  to: {
    type: String
  },
  trips: [{
    type: mongoose.Types.ObjectId,
    ref: "Trip"
  }],
  users: [{
    type: mongoose.Types.ObjectId,
    ref: "User"
  }],
  active: {
    type: Boolean,
    enum: [0, 1],
    default: 0,
  },
  // stats: { type: mongoose.Types.ObjectId },
}, {
  timestamps: true,
});
/**************************************** */
module.exports = mongoose.model("Route", routeSchema);
/**************************************** */