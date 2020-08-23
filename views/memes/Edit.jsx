const React = require("react");
class Edit extends React.Component {
  render() {
    const { name, description, image_url, _id } = this.props.meme;
    return (
      <div>
        <h2>Edit The Meme!</h2>
        <form action={`/memes/${_id}/?_method=PUT`} method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} />
          <br />
          <label htmlFor="description">Description:</label>
          <textarea
            rows={"10"}
            cols={"40"}
            name={"description"}
            value={description}
          />{" "}
          <br />
          <label htmlFor="image_url">Image Url:</label>
          <input
            type="textbox"
            name="image_url"
            defaultValue={image_url}
          />{" "}
          <br />
          <input type="submit" value="Submit Edited Meme" />
        </form>
      </div>
    );
  }
}
module.exports = Edit;
