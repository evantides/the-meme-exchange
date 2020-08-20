require("dotenv").config(); // .ENV

// Main Dependencies
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;

// URI in .ENV
const mongoURI = process.env.MONGO_URI;
//PORT for heroku
const PORT = process.env.PORT || 3000;

// Mongo Connection string
mongoose.connect(mongoURI, { useNewUrlParser: true });

// Connect to Mongo
db.on("open", () => {});

/* MiddleWare!!! */
//set public as the root folder (and as static) woo!!!
app.use(express.static("public"));

// Req.body url encoded
app.use(express.urlencoded({ extended: true }));

//use method override to allow method overrides for delete and patch
app.use(methodOverride("_method"));

//Routes Setup
app.get("/", (req, res) => {
  res.send("this will be the root");
});

//finally, the listener
app.listen(PORT, () => {
  console.log("listening on port:", PORT);
});
