require("dotenv").config(); // .ENV

// Main Dependencies
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;

//Views
const reactViews = require("express-react-views"); // V
const createEngine = reactViews.createEngine;

// URI in .ENV
const mongoURI = process.env.MONGO_URI;
//PORT for heroku
const PORT = process.env.PORT || 3000;

// Mongo Connection string
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to Mongo
db.on("open", () => {});

/* MiddleWare!!! */
//set public as the root folder (and as static) woo!!!
app.use(express.static("public"));

//set the view engines and create engine
app.set("view engine", "jsx");
app.engine("jsx", createEngine());

// Req.body url encoded
app.use(express.urlencoded({ extended: true }));

//use method override to allow method overrides for delete and patch
app.use(methodOverride("_method"));

/*  STATIC ROUTES  */
// Home page: static
app.get("/", (req, res) => {
  res.render("static/Home");
});

//About Page: static
app.get("/about", (req, res) => {
  res.render("static/About");
});

/*  NONSTATIC ROUTS  */
app.use("/memes", require("./controllers/memes.js"));

//finally, the listener
app.listen(PORT, () => {
  console.log("listening on port:", PORT);
});
