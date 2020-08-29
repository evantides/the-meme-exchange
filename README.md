The Meme Exchange is a full stack, RESTful application I built as the conclusion to Unit 2 during my Software Engineering Fellowship at General Assembly. I spent 7 days working tirelessly on this to learn new skills, and build something both creative and fun. 

It is built with Node.js, MongoDB, React, and Express.

The Meme Exchange was initially built with Stock Exchange simulators in mind. The catch is that, instead of using stocks and their history to learn about the volatility of the market, you add memes. The memes are scraped from the KnowYourMeme API, which I found a package for to help me grab the information (nodeyourmeme). I edited the package, following another user's currently unmerged contributions, to provide me all the information I personally needed for the project, specifically adding an image url to the response.

To simulate stock changes (and knowing that simulating supply and demand would not be possible on such a small scale, at least from users' potential activity), I incorporated the Google Trends API to track how popular the meme's keywords are. 

The project as of yet does not include proper authentication or hashing, but I figured for a week-long assignment, using cookies and a separate user database was enough to simulate logging in and out.

In terms of usage, each user, when created, starts out with 100 tokens. The incentive to add memes to my database is, if you add memes, you get 10 or so tokens per each meme added. Each meme can be bought in 10% increments for 10 tokens at the start to encourage purchasing. The earlier you get into a popular meme, the better off you are, but there's no telling what memes will become popular. This is a simplified example of stocks, as I understand it.

Meme prices can fluctuate by either increasing if the meme is popular enough during the previous 6 days, or decreasing if not. Users purchasing or interacting with memes on the site currently has no impact on the price of the meme.

I feel that though this project was built with fun in mind (meme culture is, after all, all about laughs and fun!), I was able to teach myself a variety of new skills, and approached this project with clarity and logic. I am intent to work on this further once my time at General Assembly is complete-- however, for now, the site stands as it was when I presented it.  

Find it hosted here: https://the-meme-exchange-simulator.herokuapp.com/