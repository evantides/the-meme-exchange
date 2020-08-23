const React = require("react"); //uses React
const Default = require("../components/Default.jsx");

/*
~~~~~~~~~~~
Static Home page so the user can navigate to the About page,
or the meme page from the root directory!! Might use this to
incorporate authentication...
~~~~~~~~~~~
*/
let userName = "";
class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Welcome to The Meme Exchange</h1>
        <p>To enter the meme zone, please log in!</p>
        <p>
          Your username doubles as your password because authentication is
          difficult!
        </p>
        <form action={"/logIn"} method={"post"}>
          <input type={"text"} name={"userName"} defaultValue={userName} />
          <input type={"submit"} name="" value={"Submit!"} />
        </form>
        <p>Put more stuff here, to lead to the right pages!!</p>
      </>
    );
  }
}
module.exports = Home;
