const express = require("express");
const router = express.Router();
const Meme = require("../models/memes");
const Seed = require("./seed");
const dailyRun = require("../controllers/daily");
const nodeyourmeme = require("nodeyourmeme");

const Users = require("../models/users");
const cookieParser = require("cookie-parser");

/*
~~~~~~~~~~~
Controllers for the Memes.

Includes all INDUCES routes for meme indexing, new page, deletion,
updating, creation, edit, and show!
I also have a seed route that allows me to seed my database with various memes!
~~~~~~~~~~~
*/

//sets up cookieParser for 'authentication'
//hint: its not really authentication...
router.use(cookieParser());

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

//BUY 10% OF A MEME
router.patch("/:id", (req, res) => {
  console.log(req.cookies.userName);
  let duplicate = false;
  let memeName = "";
  Meme.findById(req.params.id, (err, foundMeme) => {
    Users.find(
      { userName: req.cookies.userName, pass: req.cookies.pass },
      (error, userSpecific) => {
        userSpecific[0].ownedMemes.map((specificMeme) => {
          if (specificMeme.memeName._id.equals(foundMeme._id)) {
            console.log("DUPLICATE");
            duplicate = true;
            memeName = foundMeme.name;
          } else {
            console.log("there are no duplicates"); //NO DUPLICATES
          }
        });
        console.log(userSpecific[0].tokens);
        if (userSpecific[0].tokens >= foundMeme.price) {
          // userSpecific[0].tokens -= foundMeme.price;
          if (foundMeme.percentAvail > 20) {
            foundMeme.percentAvail -= 10;
            if (duplicate) {
              //if there is a duplicate entry, this will be set to true. If not, it will be false
              Users.findOne(
                { _id: userSpecific[0]._id },
                { ownedMemes: [foundMeme] },
                (err, result) => {
                  console.log("show owned memes", result.ownedMemes[0]);
                  result.ownedMemes[0].owned += 10;
                  console.log("i own", userSpecific[0].ownedMemes[0].owned);
                  for (let i = 0; i < userSpecific[0].ownedMemes.length; i++) {
                    console.log(
                      "specific meme is",
                      userSpecific[0].ownedMemes[i]
                    );
                    let specificMeme = userSpecific[0].ownedMemes;
                    if (specificMeme[i].memeName.name === foundMeme.name) {
                      console.log("I found", specificMeme[i].memeName.name);
                      console.log(
                        "this is how much I own of it",
                        userSpecific[0].ownedMemes
                      );
                      specificMeme[i].owned += 10;
                      console.log(specificMeme);
                      userSpecific[0].save((err) => {
                        if (err) console.log(err.message);
                      });
                      console.log(userSpecific[0].ownedMemes);
                      Users.updateOne(
                        { _id: userSpecific[0]._id },
                        {
                          $inc: {
                            tokens: -foundMeme.price,
                          },
                          $set: { ownedMemes: specificMeme },
                        },
                        (err, result) => {
                          console.log(err);
                          console.log(result);
                        }
                      );
                    }
                  }
                }
              );

              Meme.updateOne(
                { _id: req.params.id },
                { $set: { percentAvail: foundMeme.percentAvail } },
                (err) => {
                  console.log(err);
                }
              );
            } else {
              Users.updateOne(
                { _id: userSpecific[0]._id },
                {
                  $push: { ownedMemes: { owned: 10, memeName: foundMeme } },
                  $inc: {
                    tokens: -foundMeme.price,
                  },
                },
                (err, result) => {
                  console.log(userSpecific[0].ownedMemes);
                  console.log(err);
                }
              );
              Meme.updateOne(
                { _id: req.params.id },
                { $set: { percentAvail: foundMeme.percentAvail } },
                (err, result) => {
                  console.log(err);
                }
              );
            }
          } else {
            console.log(
              "You can't buy this meme. The meme needs to have 20% available at any given time!"
            );
          }
        } else {
          console.log("You can't buy this meme! You don't have enough tokens!");
        }
      }
    );
  });
  res.redirect("/memes");
});

/* INDUCES */

// INDEX
router.get("/", (req, res) => {
  Meme.find({}, (err, allMemes) => {
    res.render("memes/Index", {
      memes: allMemes,
      users: req.cookies.userName,
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
    if (specific.pass === req.cookies.pass) {
      specific.delete();
      console.log("Deleted?");
      res.redirect("/memes");
    } else {
      alert("You don't have the permissions to delete this!");
      res.redirect("/memes");
    }
  });
});

// UPDATE
router.put("/:id", (req, res) => {
  Meme.findByIdAndUpdate(req.params.id, req.body, (err, foundMeme) => {
    if (err) {
      res.status(500).send({
        error: err.message,
      });
    } else {
      res.redirect("/memes");
    }
  });
});

// CREATE
router.post("/", (req, res) => {
  Users.findOneAndUpdate(
    { userName: req.cookies.userName, pass: req.cookies.pass },
    { $inc: { tokens: 10 } },
    (err) => {
      if (err) {
        console.log(err.message);
      }
    }
  );
  Meme.create(req.body, (error, createdMeme) => {
    res.redirect("/memes");
  });
});

// EDIT
router.get("/:id/edit", (req, res) => {
  Meme.findById(req.params.id, (err, foundMeme) => {
    if (err) {
      res.status(500).send({
        error: err.message,
      });
    } else {
      res.render("memes/Edit", {
        meme: foundMeme,
      });
    }
  });
});

// SHOW
router.get("/:id", (req, res) => {
  Meme.findById(req.params.id, (err, foundMeme) => {
    res.render("memes/Show", {
      meme: foundMeme,
    });
  });
});

module.exports = router;
