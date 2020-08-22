const googleTrends = require("google-trends-api");
const Meme = require("../models/memes");

let currentDate = new Date();
let yesterdate = new Date(currentDate); //
yesterdate = new Date(yesterdate.setDate(yesterdate.getDate() - 7));
console.log(yesterdate);
let results = {};
let memeFind = [];
let specificResults = [];
let arrWithinSpecific = [];

const find = async () => {
  Meme.find({}, (err, allMemes) => {
    allMemes.map((spec) => {
      memeFind.push(spec.name);
    });
  }).then(() => {
    main(memeFind);
  });
};

const pushMe = async (result) => {
  console.log(result);
  module.exports = result;
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
  console.log(specificResults);
  // for (let i = 0)
  pushMe(specificResults);
};

if (false) {
  find();
}
