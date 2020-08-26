const React = require("react");
const Default = require("../components/Default");

class ShowResults extends React.Component {
  render() {
    const stuff = this.props.sentMeme;
    return (
      <Default>
        <div className={"main"}>
          <h1>Found a Meme!</h1>
          <img className="sourceImage" src={stuff.image} alt={stuff.name} />
          <form action="/memes" className={"formThing"} method="POST">
            <label className={"formLabel"}> name:</label>{" "}
            <input type="text" name="name" value={stuff.name} />
            <br />
            <label className={"formLabel"}> creator:</label>{" "}
            <input type={"text"} name={"creator"} value={"admin"} /> <br />
            <label className={"formLabel"}> Image Url:</label>
            <input type={"text"} name={"image_url"} value={stuff.image} />
            <br />
            <label className={"formLabel"}> Description: </label>
            <textarea
              rows={"10"}
              cols={"40"}
              name={"description"}
              value={stuff.about}
            />
            <br />
            <label className={"formLabel"}> Password: </label>
            <input
              type={"password"}
              name={"pass"}
              defaultValue={"onlyICanDoThis"}
            />
            <input
              className="submit"
              type={"submit"}
              name={""}
              value={"Create Meme"}
            />
          </form>
        </div>
      </Default>
    );
  }
}
module.exports = ShowResults;
