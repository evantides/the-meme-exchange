const React = require("react");
const Default = require("../components/Default");

/*
~~~~~~~~~~~
Index page, shows all memes created.. I want to make this paginated!
~~~~~~~~~~~
*/

class Index extends React.Component {
  render() {
    const { memes } = this.props;
    return (
      <Default>
        <ul>
          {memes.map((memeVidual) => {
            return (
              <li>
                <h3>{memeVidual.name}</h3>
                <img src={memeVidual.image_url} alt={memeVidual.name} />
                <h5>Price to buy this meme:</h5>
                <p>1 share (10%) is worth: {memeVidual.price} tokens!</p>
                <a href={`/memes/${memeVidual._id}`}>More Information</a>
              </li>
            );
          })}
        </ul>
      </Default>
    );
  }
}

module.exports = Index;
