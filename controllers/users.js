const express = require("express");
const app = express();
const router = express.Router();

const Users = require("../models/users");
const Meme = require("../models/memes");

const cookieParser = require("cookie-parser");

//sets up cookieParser for 'authentication'
//hint: its not really authentication...
app.use(cookieParser());

// log in info / CREATE ROUTE
router.post("/logIn", (req, res) => {
  Users.find(
    { userName: req.body.userName, pass: req.body.pass },
    (err, foundUser) => {
      if (foundUser.length > 0) {
        res.cookie("userName", req.body.userName);
        res.cookie("pass", req.body.pass);
        return res.redirect("/memes");
      } else {
        Users.create(req.body, (error) => {
          if (error) {
            error.message;
          } else {
            return (
              res.cookie("userName", req.body.userName),
              res.cookie("pass", req.body.pass),
              res.redirect("/memes")
            );
          }
        });
      }
    }
  );
});

//log out?
router.get("/logout", (req, res) => {
  //it will clear the userData cookie
  res.clearCookie("userName");
  res.clearCookie("pass");
  console.log("user logout successfully");
  res.redirect("/");
});

// INDUCES

//NEW USER Render!
router.get("/", (req, res) => {
  res.render("./users/Home");
});

//SHOW USER
router.get("/users/:name", (req, res) => {
  Users.findOne({ userName: req.params.name }, (err, foundUser) => {
    res.render("./users/Show", {
      user: foundUser,
    });
  });
});

//SELL A MEME (update?)
router.patch("/users/:thisUserId/:memeId", (req, res) => {
  console.log(req.params.memeId);
  Meme.findById({ _id: req.params.memeId }, (err, foundMeme) => {
    Meme.updateOne(
      { _id: req.params.memeId },
      { $inc: { percentAvail: +10 } },
      (err, result) => {
        res.redirect("/memes");
      }
    );
    Users.findOne({ _id: req.params.thisUserId }, (err, foundUser) => {
      let copyOfMemes = foundUser.ownedMemes;
      for (let i = 0; i < copyOfMemes.length; i++) {
        if (copyOfMemes[i].memeName._id.equals(foundMeme._id)) {
          console.log("See?");
          copyOfMemes[i].owned -= 10;
          let newCopy;
          if (copyOfMemes[i].owned <= 0) {
            copyOfMemes.splice(i, 1);
            console.log("but...", copyOfMemes);
          }
          Users.findByIdAndUpdate(
            { _id: foundUser._id },
            {
              $set: { ownedMemes: copyOfMemes },
              $inc: { tokens: foundMeme.price },
            },
            (err) => {
              if (err) {
                console.log(err.message);
              }
            }
          );
          res.redirect("/memes");
        }
      }
    });
  });
});

module.exports = router;
