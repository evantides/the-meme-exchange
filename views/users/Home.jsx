const React = require("react"); //uses React

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
      <>
        <h1>Welcome to The Meme Exchange</h1>
        <p>To enter the meme zone, please log in!</p>
        <form action={"/logIn"} method={"post"}>
          UserName:{" "}
          <input type={"text"} name={"userName"} defaultValue={userName} />{" "}
          <br />
          Password : <input type={"password"} name={"pass"} /> <br />
          <input type={"submit"} name="" value={"Submit!"} />
        </form>
      </>
    );
  }
}
module.exports = Home;
