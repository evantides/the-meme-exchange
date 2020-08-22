require("dotenv").config(); // .ENV

// Main Dependencies
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
const cookieParser = require("cookie-parser");

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
db.on("open", () => {
  console.log("connected to mongo");
});

/* MiddleWare!!! */

//set public as the root folder (and as static) woo!!!
app.use(express.static("public"));

//sets up cookieParser for 'authentication'
//hint: its not really authentication...
app.use(cookieParser());

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
  res.render("./static/Home");
});

// log in info
app.post("/logIn", (req, res) => {
  res.cookie("userName", req.body.userName);
  res.redirect("/memes");
});

//log out?
app.get("/logout", (req, res) => {
  //it will clear the userData cookie
  res.clearCookie("userName");
  console.log("user logout successfully");
  res.redirect("/");
});

//About Page: static
app.get("/about", (req, res) => {
  res.render("./static/About");
});

/*  NONSTATIC ROUTS  */
app.use("/memes", require("./controllers/memes"));

//finally, the listener
app.listen(PORT, () => {
  console.log("listening on port:", PORT);
});
