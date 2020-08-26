const React = require("react");
const Default = require("../components/Default");

class New extends React.Component {
  render() {
    return (
      <Default>
        <div className={"main"}>
          <h1>Find a Meme!</h1>
          <form
            action={"/memes/found"}
            id={"logIn"}
            className={"formThing"}
            method={"POST"}
          >
            <label className={"search"}> searchTerm:</label>{" "}
            <input className={"search"} type="search" name="q" /> <br />
            <input type={"submit"} name={""} />
          </form>
        </div>
      </Default>
    );
  }
}
module.exports = New;
