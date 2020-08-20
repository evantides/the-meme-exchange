const React = require("react"); //uses React
const Default = require("../components/Default.jsx");
class Home extends React.Component {
  render() {
    return (
      <Default>
        <h3>Welcome to The Meme Exchange</h3>
        <p>Put more stuff here, to lead to the right pages!!</p>
      </Default>
    );
  }
}
module.exports = Home;
