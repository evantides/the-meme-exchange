const mongoose = require("mongoose"); //require mongoose
const Schema = mongoose.Schema; // makes making a schema easier

/*
~~~~~~~~~~~
Schema creation for specific users!
~~~~~~~~~~~
*/

//Create the Schema!
const userSchema = new Schema({
  userName: { type: String, required: true },
  pass: { type: String, required: true },
  tokens: { type: Number, default: 100 },
  ownedMemes: { type: Array },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
