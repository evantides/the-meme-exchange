import React from "react"; //uses React

/*
~~~~~~~~~~~
Created this so I can have the same look to each webpage...
Definitely makes the code DRY-er!
~~~~~~~~~~~
*/

class NotLoggedIn extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel={"stylesheet"} href={"/css/style.css"} />
          <link
            href="https://fonts.googleapis.com/css2?family=Arvo&family=Cousine&display=swap"
            rel="stylesheet"
          />
          <title>The Meme Exchange</title>
        </head>
        <body>
          <header>
            <h1>Welcome to The Meme Exchange</h1>
          </header>
          <nav>
            <a id="memezone" href="/">
              Log in here
            </a>
            <a id="about" href={"/about"}>
              Confused? Click Me!
            </a>
          </nav>
          {this.props.children}
          <footer>
            <p>
              <small>
                Disclaimer: None of this is real. Not even the Matrix. Please
                remember that tokens aren't actual money. And I am not actually
                a duck. I promise!!!
              </small>
            </p>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = NotLoggedIn;
