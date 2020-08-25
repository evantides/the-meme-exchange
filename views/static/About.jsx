const React = require("react"); //uses React

const Notloggedin = require("../components/NotLoggedIn");
/*
~~~~~~~~~~~
Static About page... essentially is going to work as my README
for those who don't visit the Github.
~~~~~~~~~~~
*/

class About extends React.Component {
  render() {
    return (
      <Notloggedin>
        <div className={"main"}>
          <h3>About the Meme Exchange </h3>
          <img
            src={"/img/HONKS.jpg"}
            alt={"HONKS, like stonks, but bird themed"}
            id={"honks"}
          />
        </div>
        <div className={"main"}>
          <div className={"description"}>
            <h3>The Definition of 'Meme'</h3>
            <p>
              This is the definition of meme from the Miriam Webster Dictionary:
            </p>
            <ol>
              <blockquote>
                <li>
                  <i>
                    an idea, behavior, style, or usage that spreads from person
                    to person within a culture
                  </i>
                </li>{" "}
                <br />
                <li>
                  <i>
                    an amusing or interesting item (such as a captioned picture
                    or video) or genre of items that is spread widely online
                    especially through social media
                  </i>
                </li>
              </blockquote>
            </ol>
          </div>
          <div className={"description"}>
            <h3>What is this and why am I here?</h3>
            <p>
              The Meme Exchange is a fullstack web application built by your
              friend and pal, Evander Santana. It was made for a project
              assignment, but has since evolved past that purpose. As of now, it
              runs similarly a stock exchange simulator, however there are some
              notable differences. For one, stocks are memes, and each meme's
              popularity (aka, how often it is searched for on google)
              determines its price! Not every meme is popular, so some will be
              less searched for than others, which means they'll cost less!
            </p>
          </div>
          <div className={"description"}>
            <h3> That doesn't really answer the question...</h3>
            <p>
              Well, let's say you buy a meme for 10 tokens, and that meme's
              price increases to 35. You can sell that meme for 35 tokens,
              meaning you'll then have gained 25 tokens total! That's definitely
              how money works! The point is to increase your total worth by
              buying and selling memes over time. This obviously doesn't work
              exactly like a stock market, because selling a meme (and therefore
              increasing how much of it is available) doesn't yet impact the
              price of the meme. But a guy can dream, can't he?
            </p>
            <p>
              But anyway, the goal is to become a master of memedome, and then
              eventually a master of actual capitalism. Doesn't that sound fun?
              You never know how popular a meme will become. But to incentivize
              the whole creation and addition of memes to the database, you earn
              tokens for each meme you create on the site! If it becomes popular
              (or if it already is), you can also buy that meme right out the
              gate, meaning you'll have the chance to earn more tokens at the
              end of the day!
            </p>
            <p>Also, if you care, meme prices update once a day!</p>
          </div>
          <div className={"description"}>
            <h3>Well okay, that sounds a little fun! How do I start?</h3>
            <p>
              All you need to do is create a log in! Username, password, you
              know the usual jazz. Authentication is hard, so this app uses a
              series of cookies and database info to do the thing. Not too
              secure. Don't use passwords that you don't want anyone else to see
              (or steal). This is a game!
            </p>
          </div>
          <p>
            For those interested in the creator, here is a link to a more
            purposeful about page featuring yours truly:{" "}
            <a href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>
              Creator Info and Crapnot
            </a>
          </p>
        </div>
      </Notloggedin>
    );
  }
}
module.exports = About;
