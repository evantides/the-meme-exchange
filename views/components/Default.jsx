const React = require("react"); //uses React
class Default extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel={"stylesheet"} href={"/css/show.css"} />
          <title>The Meme Exchange</title>
        </head>
        <body>
          <h1>The Meme Exchange</h1>
          <nav>
            <a href="/">Home</a>
          </nav>
          {this.props.children}
          <footer>
            <a href={"/"}>About this Site!</a>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Default;
