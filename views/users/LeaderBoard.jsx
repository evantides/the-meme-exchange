const React = require("react"); //uses React
const Default = require("../components/Default.jsx");

/*
~~~~~~~~~~~
Leaderboard shows leaders in terms of token wealth!
~~~~~~~~~~~
*/

class About extends React.Component {
  render() {
    return (
      <>
        <h3>Welcome to The Meme Exchange LeaderBoard</h3>
        <p>These users have the most tokens! Go them!</p>
      </>
    );
  }
}
module.exports = About;
