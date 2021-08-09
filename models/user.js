const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, default: "authenticated user" },
  uid: { type: String, required: true },
  menu: {
    starters: {
      desc: { type: String },
      list: [{ type: Schema.Types.ObjectId, ref: "Item" }],
    },
    main: {
      desc: { type: String },
      list: [{ type: Schema.Types.ObjectId, ref: "Item" }],
    },
    dessert: {
      desc: { type: String },
      list: [{ type: Schema.Types.ObjectId, ref: "Item" }],
    },
    drinks: {
      desc: { type: String },
      list: [{ type: Schema.Types.ObjectId, ref: "Item" }],
    },
    kids: {
      desc: { type: String },
      list: [{ type: Schema.Types.ObjectId, ref: "Item" }],
    },
  },
  hours: {
    sunday: { type: String, default: "11 am - 9 pm" },
    monday: { type: String, default: "11 am - 9 pm" },
    tuesday: { type: String, default: "11 am - 9 pm" },
    wednesday: { type: String, default: "11 am - 9 pm" },
    thursday: { type: String, default: "11 am - 9 pm" },
    friday: { type: String, default: "11 am - 11 pm" },
    saturday: { type: String, default: "11 am - 11 pm" },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
