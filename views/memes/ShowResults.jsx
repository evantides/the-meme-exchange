const React = require("react");
const Default = require("../components/Default");

class ShowResults extends React.Component {
  render() {
    const stuff = this.props.sentMeme;
    return (
      <Default>
        <div id={"formThing"}>
          <h1>Found a Meme!</h1>
          <div id={"invisible"}>
            <form action="/memes" method="POST">
              name: <input type="text" name="name" value={stuff.name} />
              <br />
              creator: <input
                type={"text"}
                name={"creator"}
                value={"admin"}
              />{" "}
              <br />
              Image Url:
              <input type={"text"} name={"image_url"} value={stuff.image} />
              <img src={stuff.image} />
              <br />
              Description:
              <textarea
                rows={"10"}
                cols={"40"}
                name={"description"}
                value={stuff.about}
              />
              <br />
              <input type={"submit"} name={""} value={"Create Meme"} />
            </form>
          </div>
        </div>
      </Default>
    );
  }
}
module.exports = ShowResults;
