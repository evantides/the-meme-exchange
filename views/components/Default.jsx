import React from "react"; //uses React

/*
~~~~~~~~~~~
Created this so I can have the same look to each webpage...
Definitely makes the code DRY-er!
~~~~~~~~~~~
*/

class Default extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel={"stylesheet"} href={"/css/style.css"} />
          <title>The Meme Exchange</title>
        </head>
        <body>
          <h1>The Meme Exchange</h1>
          <nav>
            <a href="/">Home</a> <br />
            <a href={"/memes"}>Enter the Meme Zone</a>
          </nav>
          {this.props.children}
          <footer>
            <a href={"/about"}>About this Site!</a>
            <a href={"/logout"}>
              <p>Logout?</p>
            </a>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Default;
