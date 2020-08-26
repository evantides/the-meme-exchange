/*
~~~~~~~~~~~
Google Trends API is included to allow me to search the google trends
api for various meme search terms. Currently, it searches using the
exact title of the meme. Which can either be good or bad, depending on
the stock (meme)!

Node Schedule allows me to schedule a reoccurring event to run a specific
script. This will run so long as the server is running. I am currently
paying for Heroku to allow me to do this! :)
~~~~~~~~~~~
*/

//REQUIRE
const googleTrends = require("google-trends-api"); //GOOGLE TRENDS API SEARCHER
const Meme = require("../models/memes"); // Meme Schema
const schedule = require("node-schedule"); // Node Schedule!!!

// DATE AND TIME STUFF
let currentDate = new Date(); // creates a new date set to today!
let yesterdate = new Date(currentDate); //sets a duplicate currentDate
yesterdate = new Date(yesterdate.setDate(yesterdate.getDate() - 8)); //sets yesterdate to 8 days prior to 'current date'

//empty variables for various reasons!
let results = {}; // empty object for results
let memeFind = []; //empty arr for found Memes
let specificResults = []; //empty arr for specific results (from results)
let arrWithinSpecific = []; //another empty arr for specific results within teh specific results arr
let ids = []; // ids empty arr

/*
Find is an asynchronous function that finds all memes, and pushes the name of each meme into
the memefind array, as well as pushing the id of each meme into ids array.
Then, it runs main with memeFind as a parameter.
*/
const find = async () => {
  Meme.find({}, (err, allMemes) => {
    allMemes.map((spec) => {
      memeFind.push(spec.name);
      ids.push(spec._id);
    });
  }).then(() => {
    main(memeFind);
  });
};

/*
runMe is an asynchronous function.
Runs through the parsed data and checks to see if the sum of the data matches any of the 'if' statements.
*/

const runMe = async (result) => {
  result.map((specificMeme) => {
    let specName = specificMeme[0];
    let sum = 0;
    for (let i = 1; i < specificMeme.length; i++) {
      sum += specificMeme[i][0];
    }
    console.log(
      "The name of the meme is: ",
      specName,
      "The sum of the meme is: ",
      sum
    );
    ids.map((specID) => {
      Meme.findById(specID, (err, meme) => {
        console.log(meme);
        if (err) {
          err.message;
        } else {
          if (sum >= 500) {
            meme.price += 16;
          } else if (sum >= 300) {
            meme.price += 6;
          } else if (sum > 200) {
            console.log("no Change");
          } else if (sum <= 200) {
            if (meme.price <= 4) {
              meme.price = 4;
            } else {
              meme.price -= 6;
            }
          }
          Meme.updateOne({ name: specName }, meme, (err) => {
            if (err) {
              error: err.message;
            } else {
              console.log("WORKED");
            }
          });
        }
      });
    });
  });
};

const main = async (currMemes) => {
  for (let i = 0; i < currMemes.length; i++) {
    await googleTrends
      .interestOverTime({
        keyword: currMemes[i],
        startTime: yesterdate,
        endTime: currentDate,
      })
      .then((save) => {
        results = JSON.parse(save);
        results.default.timelineData
          ? results.default.timelineData.map((innerArray) => {
              arrWithinSpecific.push(innerArray.value);
            })
          : console.log("no");
        specificResults.push(arrWithinSpecific);
        arrWithinSpecific = [];
      });
    specificResults[i].unshift(currMemes[i]);
  }
  runMe(specificResults);
};

let j = schedule.scheduleJob("0 0 * * *", find);
