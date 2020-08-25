const React = require("react"); //uses React
const Notloggedin = require("../components/NotLoggedIn");
/*
~~~~~~~~~~~
Static Home page so the user can navigate to the About page,
or the meme page from the root directory!! Might use this to
incorporate authentication...

CURRENTLY SERVES AS THE "NEW" ROUTE FOR USERNAMES
But it functions also as the home page. It isn't
actually static.
~~~~~~~~~~~
*/
let userName = "";
class Home extends React.Component {
  render() {
    return (
      <Notloggedin>
        <form id={"logIn"} action={"/logIn"} method={"post"}>
          <label>UserName:</label>{" "}
          <input type={"text"} name={"userName"} defaultValue={userName} />{" "}
          <br />
          <label>Password :</label> <input type={"password"} name={"pass"} />{" "}
          <br />
          <input type={"submit"} name="" value={"Submit!"} />
        </form>
      </Notloggedin>
    );
  }
}
module.exports = Home;
