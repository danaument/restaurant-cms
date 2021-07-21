const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  desc: String,
  price: { type: String, required: true}
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;