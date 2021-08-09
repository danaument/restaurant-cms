const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  desc: String,
  price: { type: Number, required: true},
  section: { type: String, required: true},
  seedItem: { type: Boolean, default: false}
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;