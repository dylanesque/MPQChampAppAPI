**Background:** Marvel Puzzle Quest is a tile-matching mobile game (think Candy Crush or Bejeweled) with RPG elements. For those unfamiliar with the game, the basics are summarized on Wikipedia (https://en.wikipedia.org/wiki/Marvel_Puzzle_Quest). For the purposes of this project, I'm focusing on three specific aspects of the game:

-The option to set certain characters as "bonus heroes", which increases the chances of pulling a cover for that character in in-game rewards.

-Champion levels for a character, which happen by over-levelling a character with additional character covers once they've reached the standard top level for their specific rarity.

-The rewards that championed characters recieve, specifically covers for higher-rarity characters that certain characters receive, a mechanic known as "feeding".

**The Problem:** There are a LOT of characters in the game, and it can be very tedious to figure out where the best application of bonus heroes can be, particularly in light of the fact that some characters are far more effective than others. There's too much information to reliably remember which particular characters feed others, which characters are closest to a cover as a reward, and whether or not a "fed" character is the optimal beneficiary for a bonus cover.

**The Solution** This application will allow users to log in, and edit a database of MPQ characters to reflect their in-game lineup. To keep the app as simple as possible, the available characters will consist only of the in-game characters that give or receive covers as champion level rewards. Once those changes are saved, the user will be able to see an interface that presents them with their roster, sorted within individual rarities, that highlights the characters closest to a cover reward of some sort.

The application logic will be focused on the next usable cover for a character as the ideal reward, when all other considerations (such as character level) are equal. For example, 4* character Winter Soldier gives out covers for 5* Infinity War Captain America, and in my personal instance of the app, Winter Soldier is at level 299, due to receive a purple Cap cover at level 300, and is the 4* character who's closest to a cover reward for me. Let's say that my 5* Captain America already has 5 covers in his purple power (5 is the maximum number of levels for an individual power). In an instance like this, the application will look to the next closest character due for a cover reward, since the redundant Cap cover does nothing to make my lineup more powerful at that time.

**Technology Used** React is the clear choice for a front-end framework/view layer, for it's strengths as a reusable component-based view layer, and my own proficiency in it. I've given some thought to the back-end, and for the time being, it's going to be as simple as I can keep it. I will start with a RESTful architecture, with a basic database containing initial state information about characters being served via a JSON file hosted on Heroku, or a MongoDB db hosted as an mLab instance. If there are performance issues later on, which I doubt, I will refactor to use GraphQL instead. I will be using Rails as the back-end for the application for it's maturity and number of solved problems in that arena.

For styling, I'll look to the Materialize CSS library to get that opinionated Material look, and the styled-components library. styled-components made building my portfolio a delight, so I'm looking forward to utilizing it from scratch, rather than refactor an existing project into it.

** What's Happening Now? **

Right now, I'm working on the initial JSON dataset with characters that will be migrated to a user databse upon app sign up.
