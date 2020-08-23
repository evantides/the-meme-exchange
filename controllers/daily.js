const googleTrends = require("google-trends-api");
const Meme = require("../models/memes");
const schedule = require("node-schedule");

let currentDate = new Date();
let yesterdate = new Date(currentDate); //
yesterdate = new Date(yesterdate.setDate(yesterdate.getDate() - 8));
let results = {};
let memeFind = [];
let specificResults = [];
let arrWithinSpecific = [];
let ids = [];

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
          error: err.message;
        } else {
          if (sum >= 500) {
            meme.price += 16;
          } else if (sum >= 300) {
            meme.price += 6;
          } else if (sum > 200) {
            console.log("no Change");
          } else if (sum <= 200) {
            if (meme.price <= 0) {
              meme.price = 0;
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
