const React = require("react"); //uses React
const Default = require("../components/Default.jsx");

/*
~~~~~~~~~~~
Static Home page so the user can navigate to the About page,
or the meme page from the root directory!! Might use this to
incorporate authentication...
~~~~~~~~~~~
*/
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
