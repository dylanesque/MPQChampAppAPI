**Background:** 

Marvel Puzzle Quest is a tile-matching mobile game (think Candy Crush or Bejeweled) with RPG elements. For those unfamiliar with the game, the basics are summarized on Wikipedia (https://en.wikipedia.org/wiki/Marvel_Puzzle_Quest). For the purposes of this project, I'm focusing on three specific aspects of the game:

-The option to set certain characters as "bonus heroes", which increases the chances of pulling a cover (or "shards", an in-game reward that players can turn in for covers when they have a certain amount) for that character in in-game rewards.

-Champion levels for a character, which happen by over-levelling a character with additional character covers once they've reached the standard top level for their specific rarity.

-The rewards that championed characters receive, specifically covers (or shards) for higher-rarity characters that certain characters receive, a mechanic known as "feeding".

**The Problem:** 

There are a LOT of characters in the game, and it can be very tedious to figure out where the best application of bonuses can be, particularly in light of the fact that some characters are far more effective than others. There's too much information to reliably remember which particular characters feed others, which characters are closest to a cover as a reward, and whether or not a "fed" character is the optimal beneficiary for a bonus cover.

**The Solution:** 

This application will allow users to log in, and edit a database of MPQ characters to reflect their in-game lineup. To keep the app as simple as possible, the available characters will consist only of the in-game characters that give or receive covers as champion level rewards. Once those changes are saved, the user will be able to see an interface that presents them with their roster, sorted within individual rarities, that highlights the characters closest to a cover reward of some sort.

The application logic will be focused on the next usable cover for a character as the ideal reward, when all other considerations (such as character level) are equal. For example, 4* character Winter Soldier gives out covers for 5* Infinity War Captain America, and in my personal instance of the app, Winter Soldier is at level 299, due to receive a purple Cap cover at level 300, and is the 4* character who's closest to a cover reward for me. Let's say that my 5* Captain America already has 5 covers in his purple power (5 is the maximum number of levels for an individual power). In an instance like this, the application will look to the next closest character due for a cover reward, since the redundant Cap cover does nothing to make my lineup more powerful at that time.

**A Note on Changes to the MPQ Reward Structure:**

As of mid-November 2019, MPQ made significant changes to it's reward structure, replacing the Bonus Heroes system with Shards, a currency that players acquire from opening certain token types that allow them to make more focused progress towards the characters they want to level. At first, it seemed like this change would make this app obsolete, since the entire initial point was to have a calculator to tell players where to apply their bonus heroes. After reading through the changes carefully, it became clear that this app still has it's place, since the main problem of calculating who is giving the next feeder when remains. 

EDIT: This change was followed by another large change to the reward structure in December, which made a significant addition to the number of feeders in the game, which will necessitate forthcoming changes to the character database and complexity of program logic as it pertains to who feeds who, when and where.

**Technology Used And Application Flow:** 

The tech stack for this application will utilize:

- A seed database of the game characters written in JSON, and served using Express. This is deployed on Heroku (found at https://thawing-tor-15752.herokuapp.com/?pretty), as both an exercise for me in deploying a Node API, and to make the basic character data available for anybody else who wanted build supplemental apps for MPQ.

- The backend will be written in MongoDB/Mongoose, and Express/Node.js. Users will comprise of a email address and password, and a character database that will be seeded with the initial character database upon sign up. Data will initially be hosted on an Atlas cluster, but will be moved to another hosting solution (Amazon S3, Firebase, or mLab) if costs (likely) or scaling (a lot less likely) become an issue. Authentication and authorization will be handled by Express, making heavy use of the [bcryptjs](https://www.npmjs.com/package/bcryptjs) and [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) packages for password hashing/salting and access tokens, respectively.
API testing will be carried out using [Insomnia](https://insomnia.rest/). 

-The front end will be written in React, utilizing the Materialize library for it's bright, opinionated look. React's easily composable, component-based nature paired with it's strength at "smart" DOM updates make it an ideal choice for a project with intricate front-end UI such as this one. 

Application flow will work like this:

1) A user signs up for the app, and has a basic database of the relevant characters made available to work with.
2) The user can then customize individual characters in the database via editing power and character levels to reflect the state of their in-game lineup, in an "Edit Roster" screen, and saving those changes.
3) The user can then navigate to a "Roster Status" screen, which will do several things:
   + Filter the list of characters, presenting only characters with one or more power levels added.
   + Present lists of the characters, separated by rarity levels, and sorted to highlight the characters closest to in-game reward.


**What's Next**

-The JSON API that contains base character data needs to be expanded to include the characters added to the bonus system in the December 2019 update.

-
