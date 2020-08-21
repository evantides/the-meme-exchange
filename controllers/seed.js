const nodeyourmeme = require("nodeyourmeme"); //api web scraper for Know Your Meme... makes this a little easier
const terms = ["ugandan knuckles", "lorax", "karen", "birb", "portal to hell"]; // 5 basic memes
let obj = []; //empty array which will have objects placed inside

/*
~~~~~~~~~~~
NodeYourMeme works by using search terms to find the right meme.
I actually updated the NodeYourMeme api server.js to include an
image (and a URL, but I'm not using it here). This info was available
through the github for nodeyourmeme, but it was very insightful!
It works as an asynchronous function, which can make the rest of
the function run improperly unless things are in the right place.

That's why the function pushMe(obj) is outside the for loop,
which will allow the for loop to complete (after the async
finishes) before running pushMe.

The function pushMe just waits until the function is done to push
the object into module.exports. I could have just kept the module.
exports within the main function, but I wanted to make things
clearer for myself.
~~~~~~~~~~~
*/

const pushMe = (obj) => {
  module.exports = obj;
};

const main = () => {
  for (let i = 0; i < terms.length; i++) {
    let currObj = {};
    nodeyourmeme
      .search(terms[i])
      .then((spec) => {
        currObj.name = spec.name;
        currObj.image_url = spec.image;
        currObj.description = spec.about;
        currObj.creator = "admin";
        obj[i] = currObj;
      })
      .catch(console.error);
  }
  pushMe(obj); // runs module.exports...
};

main(); // runs main
