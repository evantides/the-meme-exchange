const express = require("express");
const router = express.Router();
const Meme = require("../models/memes");
const Seed = require("./seed");
const dailyRun = require("../controllers/daily");
const nodeyourmeme = require("nodeyourmeme");

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

//Google API
router.get("/daily", (req, res) => {
  res.send(dailyRun);
});

// Show a Found Meme
router.post("/found", (req, res) => {
  console.log(req.body.q);
  nodeyourmeme
    .search(req.body.q)
    .then((spec) => {
      res.render("memes/ShowResults", {
        sentMeme: spec,
      });
    })
    .catch(console.error);
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
router.delete("/:id", (req, res) => {
  Meme.findById(req.params.id, (err, specific) => {
    if (specific.pass === req.cookies.userName) {
      specific.delete();
      console.log("Deleted?");
      res.redirect("/memes");
    } else {
      console.log("oops");
    }
  });
});

// UPDATE

// CREATE
router.post("/", (req, res) => {
  Meme.create(req.body, (error, createdMeme) => {
    res.redirect("/memes");
  });
});

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
