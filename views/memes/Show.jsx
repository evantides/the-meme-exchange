const React = require("react");
const Default = require("../components/Default");

/*
~~~~~~~~~~~
Show page... self-explanatory.
Eventually will have a buy button here!!
~~~~~~~~~~~
*/

class Show extends React.Component {
  render() {
    const { meme } = this.props;
    return (
      <Default>
        <div id={"show"}>
          <h1>{meme.name}</h1>
          <img src={meme.image_url} alt={meme.name} />
          <p>{meme.description}</p>
          <p>Created by: {meme.creator}</p>
        </div>
      </Default>
    );
  }
}

module.exports = Show;
