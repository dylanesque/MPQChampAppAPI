**Background:** 

Marvel Puzzle Quest is a tile-matching mobile game (think Candy Crush or Bejeweled) with RPG elements. For those unfamiliar with the game, the basics are summarized on Wikipedia (https://en.wikipedia.org/wiki/Marvel_Puzzle_Quest). For the purposes of this project, I'm focusing on three specific aspects of the game:

+ The option to set certain characters as "bonus heroes", which increases the chances of pulling a cover (or "shards", an in-game reward that players can turn in for covers when they have a certain amount) for that character in in-game rewards.

+ "Champion" levels for a character, which happen by over-levelling a character with additional character covers once they've reached the standard top level for their specific rarity.

+ The rewards that champed characters receive, specifically covers (or shards) for higher-rarity characters that certain characters receive, a mechanic known as "feeding".

**The Problem:** 

There are a LOT of characters in the game, and it can be very tedious to figure out where the best application of bonuses can be, particularly in light of the fact that some characters are far more effective than others. There's too much information to reliably remember which particular characters feed others, which characters are closest to a cover as a reward, and whether or not a "fed" character is the optimal beneficiary for a bonus cover.

**The Solution:** 

This application will allow users to log in, and edit a database of MPQ characters to reflect their in-game lineup. To keep the app as simple as possible, the available characters will consist only of the in-game characters that give or receive covers as champion level rewards. Once those changes are saved, the user will be able to see an interface that presents them with their roster, sorted within individual rarities, that highlights the characters closest to a cover reward of some sort.

**A Note on Changes to the MPQ Reward Structure:**

As of mid-November 2019, MPQ made significant changes to it's reward structure, replacing the Bonus Heroes system with shards, a currency that players acquire from opening certain token types that allow them to make more focused progress towards the characters they want to level. At first, it seemed like this change would make this app obsolete, since the entire initial point was to have a calculator to tell players where to apply their bonus heroes. After reading through the changes carefully, it became clear that this app still has it's place, since the main problem of quickly calculating who is giving the next most useful reward remains. 

EDIT: This change was followed by another large change to the reward structure in December, which made a significant addition to the number of feeders in the game, which will necessitate forthcoming changes to the character database roster and complexity of program logic as it pertains to who feeds who, when and where.

**Technology Used And Application Flow:** 

The tech stack for this application will utilize:

+ A seed database of the game characters written in JSON, and served using Express. This is deployed on Heroku (found at https://thawing-tor-15752.herokuapp.com/?pretty), as both an exercise for me in deploying a Node API, and to make the basic character data available for anybody else who wanted build supplemental apps for MPQ.

+ The backend will be written in MongoDB/Mongoose, and Express/Node.js. Fields on a User object will comprise of a email address, password, and a character database that will be seeded with the initial character database upon sign up. Data will initially be hosted on an Atlas cluster, but will be moved to another hosting solution (Amazon S3, Firebase, or mLab) if costs or scaling become an issue. Authentication and authorization will be handled by Express, making heavy use of the [bcryptjs](https://www.npmjs.com/package/bcryptjs) and [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) packages for password hashing/salting and access tokens, respectively.
API testing will be carried out using [Insomnia](https://insomnia.rest/). Additional backend testing will be done with [Jest](https://jestjs.io/) and possibly [Cypress.io](https://www.cypress.io/).

+ The front end will be written in React, utilizing the Materialize library for it's bright, opinionated look. React's easily composable, component-based nature paired with it's strength at "smart" DOM updates make it an ideal choice for a project with intricate front-end UI such as this one. Any front end testing will likely be done with [react-testing-library](https://testing-library.com/docs/react-testing-library/intro). 

Feature creation/implementation will driven by BDD style statements focused on the user experience, for example, "I can view and edit my character roster", "I won't be able to edit any power so that it's value is less than zero", I won't be able to edit any power so that it's value exceeds five", etc.

Application flow will work like this:

1) A user signs up for the app, and has a basic database of the relevant characters made available to work with.
2) The user can then customize individual characters in the database via editing power and character levels to reflect the state of their in-game lineup, in an "Edit Roster" screen, and saving those changes.
3) The user can then navigate to a "Roster Status" screen, which will do several things:
   
   + Filter the list of characters, presenting only characters with one or more power levels added.
   + Present lists of the characters, organized into individual rarity levels, and sorted to highlight the characters closest to their next in-game reward.


**What's Next:**

+ The JSON API that contains base character data needs to be expanded to include the characters added to the bonus system in the December 2019 update.

+ Implementation and testing of the app backend, including functionality for signing up, signing in, and logging out. 

+ Implementation of the editing of characters in the roster. The only editable fields in each character will be the individual power levels for the three abilities each character has, and the character level. The major mechanic that needs to replicated from the game is that the maximum possible character level is keyed to how many covers a character has. There is some variance as to exact level based on covers before a character is champed(even within the same level of character rarity) in the game, but I don't need to emulate this feature in this application since I'm primarily concerned with what happens with a character after they've been champed. 

**Future Enhancements:**

Some things for me to consider in the future after the MVP is finished:

+ Adding server-side rendering, or adding progressive web app functionality. 
+ Creating a version of the app in React Native
+ Deeper logic in the application that accounts for some cover rewards being more useful than others, some characters being more useful than others, and other (very subjective) metrics.
