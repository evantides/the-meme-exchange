const React = require("react"); //uses React

/*
~~~~~~~~~~~
Static About page... essentially is going to work as my README
for those who don't visit the Github.
~~~~~~~~~~~
*/

class About extends React.Component {
  render() {
    return (
      <>
        <h3>Welcome to The Meme Exchange About Page!</h3>
        <p>Creator Info and Crapnot</p>
      </>
    );
  }
}
module.exports = About;
