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
          <link
            href="https://fonts.googleapis.com/css2?family=Arvo&family=Cousine&display=swap"
            rel="stylesheet"
          />
          <title>The Meme Exchange</title>{" "}
        </head>
        <body>
          <header>
            <h1>You have entered... The Meme Exchange</h1>
          </header>
          <nav>
            <a id={"new"} href={"/memes/new"}>
              Create a new Meme
            </a>
            <a id={"memes"} href={"/memes"}>
              (Re)Enter the Meme Zone
            </a>
            <a id={"about"} href={"/about"}>
              How-To Guide
            </a>
            <a id={"logout"} href="/logout">
              LogOut
            </a>
          </nav>
          {this.props.children}
          <footer>
            <p>
              <small>
                Disclaimer: None of this is real. Not even this computer. Please
                remember that tokens aren't actual money. Please, do not use
                personal, secret passwords on the site. I am not actually a
                duck. I promise!!!
              </small>
            </p>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Default;
