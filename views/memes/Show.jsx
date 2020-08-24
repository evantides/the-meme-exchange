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
          <p>
            {meme.percentAvail}% of this Meme is currently available! You can
            buy 10% for {meme.price} tokens.
          </p>
          <p>Created by: {meme.creator}</p>
          <form action={`/memes/${meme.id}/?_method=DELETE`} method={"POST"}>
            <input type={"submit"} value={"Delete This Meme!"} />
          </form>
          <a href={`/memes/${meme.id}/edit`}>Edit this meme</a>
          <form action={`/memes/${meme.id}/?_method=PATCH`} method={"POST"}>
            <input type={"submit"} value={"Buy 10% of this Meme!"} />
          </form>
        </div>
      </Default>
    );
  }
}

module.exports = Show;
