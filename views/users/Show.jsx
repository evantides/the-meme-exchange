const React = require("react");
const Default = require("../components/Default");

/*
~~~~~~~~~~~
Show page for users... self-explanatory.
~~~~~~~~~~~
*/

class Show extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <Default>
        <h2>{user.userName}</h2>
        <h5> You have {user.tokens} tokens available!</h5>
        <p>
          {user.ownedMemes.length >= 1
            ? `You currently have the following ${user.ownedMemes.length} meme(s) in your portfolio`
            : "You don't own any memes yet!"}
        </p>
        <ul id={"memes"}>
          {user.ownedMemes.map((specificMeme) => {
            {
              return (
                <>
                  <li>{specificMeme.memeName.name}</li>
                  <li>You own {specificMeme.owned}% of this Meme!</li>
                  <li>
                    <img
                      src={specificMeme.memeName.image_url}
                      alt={specificMeme.memeName.name}
                    />
                  </li>
                  <li>Purchased At: {specificMeme.memeName.price}</li>
                  <li>
                    <form
                      action={`/users/${user.id}/${specificMeme.memeName._id}/?_method=PATCH`}
                      method={"POST"}
                    >
                      <input type={"submit"} value={"Sell 10% of this Meme!"} />
                    </form>
                  </li>
                </>
              );
            }
          })}
        </ul>
      </Default>
    );
  }
}

module.exports = Show;
