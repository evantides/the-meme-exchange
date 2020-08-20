const mongoose = require("mongoose"); //require mongoose
const Schema = mongoose.Schema; // makes making a schema easier

//Create the Schema!
const memeSchema = new Schema({
  name: { type: String, required: true },
  image_url: { type: String, required: true },
  description: { type: String, required: true },
  creator: { type: String, default: "admin" },
});

const Meme = mongoose.model("Meme", memeSchema);
module.exports = Meme;
