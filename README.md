**Background:** Marvel Puzzle Quest is a tile-matching mobile game (think Candy Crush or Bejeweled) with RPG elements. For those unfamiliar with the game, the basics are summarized on Wikipedia (https://en.wikipedia.org/wiki/Marvel_Puzzle_Quest). For the purposes of this project, I'm focusing on three specific aspects of the game:

-The option to set certain characters as "bonus heroes", which increases the chances of pulling a cover for that character in in-game rewards.

-Champion levels for a character, which happen by over-levelling a character with additional character covers once they've reached the standard top level for their specific rarity.

-The rewards that championed characters recieve, specifically covers for higher-rarity characters that certain characters receive, a mechanic known as "feeding".

**The Problem:** There are a LOT of characters in the game, and it can be very tedious to figure out where the best application of bonus heroes can be, particularly in light of the fact that some characters are far more effective than others. There's too much information to reliably remember which particular characters feed others, which characters are closest to a cover as a reward, and whether or not a "fed" character is the optimal beneficiary for a bonus cover.

**The Solution** This application will allow users to log in, and edit a database of MPQ characters to reflect their in-game lineup. To keep the app as simple as possible, the available characters will consist only of the in-game characters that give or receive covers as champion level rewards. Once those changes are saved, the user will be able to see an interface that presents them with their roster, sorted within individual rarities, that highlights the characters closest to a cover reward of some sort.

The application logic will be focused on the next usable cover for a character as the ideal reward, when all other considerations (such as character level) are equal. For example, 4* character Winter Soldier gives out covers for 5* Infinity War Captain America, and in my personal instance of the app, Winter Soldier is at level 299, due to receive a purple Cap cover at level 300, and is the 4* character who's closest to a cover reward for me. Let's say that my 5* Captain America already has 5 covers in his purple power (5 is the maximum number of levels for an individual power). In an instance like this, the application will look to the next closest character due for a cover reward, since the redundant Cap cover does nothing to make my lineup more powerful at that time.

**A Note on Changes to the MPQ Reward Structure** AS of mid-November 2019, MPQ made a large change to it's reward structure, replacing the Bonus Heroes system with Shards, a currency that players acquire from opening certain token types that allow them to make more focused progress towards the characters they want to level. At first, it seemed like this change would make this app obsolete, since the entire initial point was to have a calculator to tell players where to apply their bonus heroes. After reading through the changes carefully, it became clear that this app still has it's place, since the main problem of calculating who is giving the next feeder when remains. If anything, these changes make a strong case for expanding the purpose of the app to tracking ALL characters from 3* rarity and above to point out to players when Classic/Legendary tokens and other major rewards are dropping.

EDIT: This change was followed by another large change to the reward structure in December, which made a significant addition to the number of feeders in the game, which will necesiate forthcoming changes to the character database and complexity of program logic as it pertains to who feeds who, when and where.

**Technology Used** I'm going to use a microservice-style approach to application architecture, using an Express JSON API for
the necessary character seed data, which will be read and utilized by a Node.js application, that will utilize React as the view layer.

For styling, I'll look to the Materialize CSS library to get that opinionated Material look, and the styled-components library. styled-components made building my portfolio a delight, so I'm looking forward to utilizing it from scratch, rather than refactor an existing project into it.

**What's Happening Now?**

-The JSON API that contains base character data has been completed, and is deployed [here](https://thawing-tor-15752.herokuapp.com/?pretty)
