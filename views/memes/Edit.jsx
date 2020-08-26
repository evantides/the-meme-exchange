const React = require("react");
const Default = require("../components/Default");

class Edit extends React.Component {
  render() {
    const { name, description, image_url, _id } = this.props.meme;
    return (
      <Default>
        <div className={"main"}>
          <h2>Edit The Meme!</h2>
          <form
            className={"formThing"}
            action={`/memes/${_id}/?_method=PUT`}
            method="POST"
          >
            <label className={"formLabel"} htmlFor="name">
              Name:
            </label>
            <input id="title" type="text" name="name" defaultValue={name} />
            <br />
            <label className={"formLabel"} htmlFor="description">
              Description:
            </label>
            <textarea
              rows={"10"}
              cols={"40"}
              name={"description"}
              value={description}
            />{" "}
            <br />
            <label className={"formLabel"} htmlFor="image_url">
              Image Url:
            </label>
            <input type="textbox" name="image_url" defaultValue={image_url} />{" "}
            <br />
            <input
              className="submit"
              type="submit"
              value="Submit Edited Meme"
            />
          </form>
        </div>
      </Default>
    );
  }
}
module.exports = Edit;
