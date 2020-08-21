const mongoose = require("mongoose"); //require mongoose
const Schema = mongoose.Schema; // makes making a schema easier

/*
~~~~~~~~~~~
Schema creation for Memes!
May require additional JS to get the math for price and percentAvailable working..
We'll just have to see what comes next!
~~~~~~~~~~~
*/

//Create the Schema!
const memeSchema = new Schema({
  name: { type: String, required: true },
  image_url: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: String, default: "admin" },
  pass: { type: String, default: "onlyICanDoThis" }, // GOING TO BE HIDDEN FROM VIEW...
  price: { type: Number, default: 10 },
  percentAvail: { type: Number, default: 100 },
});

const Meme = mongoose.model("Meme", memeSchema);
module.exports = Meme;
