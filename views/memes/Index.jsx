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
        <div className={"main"}>
          <h3 id={"loggedIn"}>
            <a href={`users/${this.props.users}`}>
              {this.props.users ? this.props.users : "Guest"} is currently
              Logged In!{" "}
            </a>
          </h3>
          <ul className={"memeList"}>
            {memes.map((memeVidual) => {
              return (
                <li className={"memeSpecific"}>
                  <h3>{memeVidual.name}</h3>
                  <img src={memeVidual.image_url} alt={memeVidual.name} />
                  <p>
                    {memeVidual.percentAvail}% of this Meme is currently
                    available!
                  </p>
                  <div className={"buyMe"}>
                    <p>Price to buy this meme:</p>
                    <p>1 share (10%) is worth: {memeVidual.price} tokens!</p>
                    <a href={`/memes/${memeVidual._id}`}>More Information</a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Default>
    );
  }
}

module.exports = Index;
