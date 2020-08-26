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
        <div className={"mainIndex"}>
          <h2>{user.userName}</h2>
          <h5> You have {user.tokens} tokens available!</h5>
          <p>
            {user.ownedMemes.length >= 1
              ? `You currently have the following ${user.ownedMemes.length} meme(s) in your portfolio`
              : "You don't own any memes yet!"}
          </p>
          <ul className={"memeList"}>
            {user.ownedMemes.map((specificMeme) => {
              {
                return (
                  <>
                    <li className={"memeSpecific"}>
                      <p>{specificMeme.memeName.name}</p>
                      <p>You own {specificMeme.owned}% of this Meme!</p>
                      <img
                        src={specificMeme.memeName.image_url}
                        alt={specificMeme.memeName.name}
                      />
                      <p>Purchased At: {specificMeme.memeName.price}</p>
                      <p>{specificMeme.memeName.description}</p>
                      <div className={"buttons"}>
                        <form
                          action={`/users/${user.id}/${specificMeme.memeName._id}/?_method=PATCH`}
                          method={"POST"}
                        >
                          <input
                            type={"submit"}
                            value={"Sell 10% of this Meme!"}
                          />
                        </form>
                      </div>
                    </li>
                  </>
                );
              }
            })}
          </ul>
        </div>
      </Default>
    );
  }
}

module.exports = Show;
