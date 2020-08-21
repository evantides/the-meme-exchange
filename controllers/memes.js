const express = require("express");
const router = express.Router();
const Meme = require("../models/memes");
const Seed = require("./seed");

/*
~~~~~~~~~~~
Controllers for the Memes.

Includes all INDUCES routes for meme indexing, new page, deletion,
updating, creation, edit, and show!
I also have a seed route that allows me to seed my database with various memes!
~~~~~~~~~~~
*/

//STUFF GOES HERE

// SEED ROUTE

router.get("/seed", (req, res) => {
  Meme.create(Seed, (err) => {
    if (err) {
      err.message;
    } else {
      res.redirect("/");
    }
  });
});

/* INDUCES */

// INDEX
router.get("/", (req, res) => {
  Meme.find({}, (err, allMemes) => {
    res.render("memes/Index", {
      memes: allMemes,
    });
  });
});

// NEW
router.get("/new", (req, res) => {
  res.render("memes/New");
});

// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW
router.get("/:id", (req, res) => {
  Meme.findById(req.params.id, (err, foundMeme) => {
    res.render("memes/Show", {
      meme: foundMeme,
    });
  });
});

module.exports = router;
