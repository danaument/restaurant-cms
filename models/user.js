const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, default: 'authenticated user'},
  uuid: {type: String, required: true}
});

const User = mongoose.model("User", userSchema);

module.exports = User;