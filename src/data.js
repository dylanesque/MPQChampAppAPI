const fourChampRewardLevels = [280, 300, 320, 340, 350, 360];
const threeChampRewardLevels = [183, 223, 265];
const twoChampRewardLevels = [99, 115, 127];

const fiveStarChars = [
  {
    name: 'Black Bolt',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'green',
    powerTwoColor: 'black',
    powerThreeColor: 'yellow',
    feeder: 'Medusa',
    championThreshold: 450,
    currentlyChamped: isChamped()
  },
  {
    name: 'Black Panther (Civil War)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'green',
    powerTwoColor: 'black',
    powerThreeColor: 'yellow',
    feeder: 'Black Panther'
  },
  {
    name: 'Black Widow',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'purple',
    powerTwoColor: 'red',
    powerThreeColor: 'black',
    feeder: 'Black Widow'
  },
  {
    name: 'Captain America (The First Avenger)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'yellow',
    powerTwoColor: 'red',
    powerThreeColor: 'blue',
    feeder: 'Peggy Carter'
  },
  {
    name: 'Captain America (Infinity War)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'red',
    powerTwoColor: 'purple',
    powerThreeColor: 'yellow',
    feeder: 'Winter Soldier'
  },
  {
    name: 'Daredevil',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'yellow',
    powerTwoColor: 'green',
    powerThreeColor: 'purple',
    feeder: 'Kingpin'
  },
  {
    name: 'Doctor Octopus',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'black',
    powerTwoColor: 'blue',
    powerThreeColor: 'green',
    feeder: 'Carnage'
  },
  {
    name: 'Ghost Rider (Robbie Reyes)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'green',
    powerTwoColor: 'red',
    powerThreeColor: 'black',
    feeder: 'Ghost Rider (Johnny Blaze)'
  },
  {
    name: 'Green Goblin',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'black',
    powerTwoColor: 'purple',
    powerThreeColor: 'yellow',
    feeder: 'Sandman'
  },
  {
    name: 'Hawkeye',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'purple',
    powerTwoColor: 'blue',
    powerThreeColor: 'red',
    feeder: 'Kate Bishop'
  },
  {
    name: 'Iron Man',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'red',
    powerTwoColor: 'blue',
    powerThreeColor: 'yellow',
    feeder: 'War Machine'
  },
  {
    name: 'Jean Grey',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'green',
    powerTwoColor: 'purple',
    powerThreeColor: 'red',
    feeder: 'Jubilee'
  },
  {
    name: 'Jessica Jones',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'red',
    powerTwoColor: 'black',
    powerThreeColor: 'blue',
    feeder: 'America Chavez'
  },
  {
    name: 'Loki',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'purple',
    powerTwoColor: 'green',
    powerThreeColor: 'black',
    feeder: 'The Hulk (Main Event)'
  },
  {
    name: 'Okoye',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'black',
    powerTwoColor: 'yellow',
    powerThreeColor: 'red',
    feeder: 'Shuri'
  },
  {
    name: 'Silver Surfer',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'blue',
    powerTwoColor: 'red',
    powerThreeColor: 'black',
    feeder: 'Mr. Fantastic'
  },
  {
    name: 'Spider-Man (Back In Black)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'blue',
    powerTwoColor: 'green',
    powerThreeColor: 'purple',
    feeder: 'Spider-Man (Infinity War)'
  },
  {
    name: 'Spider-Man (Peter Parker)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'blue',
    powerTwoColor: 'green',
    powerThreeColor: 'red',
    feeder: 'Vulture'
  },
  {
    name: 'Star-Lord',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'yellow',
    powerTwoColor: 'purple',
    powerThreeColor: 'green',
    feeder: 'Drax'
  },
  {
    name: 'Thanos',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'black',
    powerTwoColor: 'purple',
    powerThreeColor: 'green',
    feeder: 'Gamora'
  },
  {
    name: 'Thor',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'green',
    powerTwoColor: 'red',
    powerThreeColor: 'yellow',
    feeder: 'Valkyrie'
  },
  {
    name: 'Wasp',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'blue',
    powerTwoColor: 'yellow',
    powerThreeColor: 'black',
    feeder: 'Ant-Man'
  },
  {
    name: 'Wolverine (Old Man Logan)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 255,
    powerOneColor: 'black',
    powerTwoColor: 'yellow',
    powerThreeColor: 'red',
    feeder: 'Wolverine (X-Force)'
  }
];

const fourStarChars = [
  {
    name: 'America Chavez',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'red',
    powerTwoColor: 'yellow',
    powerThreeColor: 'green',
    feedee: 'Jessica Jones'
  },
  {
    name: 'Ant-Man',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'purple',
    powerTwoColor: 'blue',
    powerThreeColor: 'yellow',
    feedee: 'Wasp (Hope Van Dyne)',
    feeder: 'Squirrel Girl'
  },
  {
    name: 'Black Panther (King of Wakanda)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'yellow',
    powerTwoColor: 'blue',
    powerThreeColor: 'red',
    feedee: 'Black Panther (Civil War)',
    feeder: 'Black Panther (T\'Challa)'
  },
  {
    name: 'Black Widow (Infinity War)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'black',
    powerTwoColor: 'purple',
    powerThreeColor: 'yellow',
    feedee: 'Black Widow (Natasha Romanoff)'
  },
  {
    name: 'Drax',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'black',
    powerTwoColor: 'purple',
    powerThreeColor: 'red',
    feedee: 'Star-Lord (Awesome Mix Vol 2)',
    feeder: 'Star-Lord (Peter Quill)'
  },
  {
    name: 'Gamora (Awesome Mix Vol 2)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'red',
    powerTwoColor: 'black',
    powerThreeColor: 'blue',
    feedee: 'Thanos (The Mad Titan)'
  },
  {
    name: 'Ghost Rider (Johnny Blaze)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'green',
    powerTwoColor: 'red',
    powerThreeColor: 'black',
    feedee: 'Ghost Rider (Robbie Reyes)',
    feeder: 'The Hood (Classic)'
  },
  {
    name: 'Jubilee',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'yellow',
    powerTwoColor: 'purple',
    powerThreeColor: 'green',
    feedee: 'Jean Grey (Phoenix)',
  }, {
    name: 'Kate Bishop',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'blue',
    powerTwoColor: 'black',
    powerThreeColor: 'purple',
    feedee: 'Hawkeye (Clint Barton)',
    feeder: 'Hawkeye (Hawkguy)'
  }, {
    name: 'Kingpin (Wilson Fisk)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'black',
    powerTwoColor: 'purple',
    powerThreeColor: 'yellow',
    feedee: 'Daredevil (Matt Murdock)',
    feeder: 'Bullseye (Classic)'
  }, {
    name: 'Medusa',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'yellow',
    powerTwoColor: 'red',
    powerThreeColor: 'purple',
    feedee: 'Black Bolt',
    feeder: 'Kamala Khan (Ms. Marvel)'
  },
  {
    name: 'Peggy Carter',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'red',
    powerTwoColor: 'yellow',
    powerThreeColor: 'blue',
    feedee: 'Captain America (First Avenger)',
    feeder: 'Psylocke'
  },
  {
    name: 'Sandman',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'green',
    powerTwoColor: 'purple',
    powerThreeColor: 'yellow',
    feedee: 'Green Goblin'
  },
  {
    name: 'Shuri',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'blue',
    powerTwoColor: 'green',
    powerThreeColor: 'red',
    feedee: 'Okoye'
  },
  {
    name: 'Spider-Man (Infinity War)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'blue',
    powerTwoColor: 'green',
    powerThreeColor: 'red',
    feedee: 'Spider-Man (Back In Black)'
  },
  {
    name: 'The Hulk (The Main Event)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'green',
    powerTwoColor: 'purple',
    powerThreeColor: 'yellow',
    feedee: 'Loki (God of Mischief)'
  },
  {
    name: 'Valkyrie',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'red',
    powerTwoColor: 'black',
    powerThreeColor: 'yellow',
    feedee: 'Thor (God of Thunder)'
  },
  {
    name: 'Vulture',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'black',
    powerTwoColor: 'green',
    powerThreeColor: 'blue',
    feedee: 'Spider-Man (Peter Parker)'
  },
  {
    name: 'War Machine',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'red',
    powerTwoColor: 'blue',
    powerThreeColor: 'green',
    feedee: 'Iron Man (Mark XLVI)',
    feeder: 'Quicksilver'
  },
  {
    name: 'Winter Soldier',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'purple',
    powerTwoColor: 'blue',
    powerThreeColor: 'red',
    feedee: 'Captain America (Infinity War)',
    feeder: 'Steve Rogers (Super Soldier)'
  },
  {
    name: 'Wolverine (X-Force)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 70,
    powerOneColor: 'green',
    powerTwoColor: 'black',
    powerThreeColor: 'yellow',
    feedee: 'Wolverine (Old Man Logan)',
    feeder: 'Wolverine (Patch)'
  }
];

const threeStarChars = [
  {
  name: 'Angel (All-New X-Men)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'blue',
    powerTwoColor: 'green',
    powerThreeColor: 'black',
    feedee: 'Jean Grey (All-New X-Men)'
},{
  name: 'Beast',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'blue',
    powerTwoColor: 'green',
    powerThreeColor: 'yellow',
    feedee: 'Jean Grey (All-New X-Men)'
},{
  name: 'Black Panther (T\'Challa)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'yellow',
    powerTwoColor: 'blue',
    powerThreeColor: 'black',
    feedee: 'Mr. Fantastic',
},{
  name: 'Black Widow (Grey Suit)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'purple',
    powerTwoColor: 'green',
    powerThreeColor: 'red',
    feedee: 'Nick Fury'
},{
  name: 'Blade (Daywalker)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'black',
    powerTwoColor: 'purple',
    powerThreeColor: 'green',
    feedee: 'Blade (Modern)'
},{
  name: 'Bullseye (Classic)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'black',
    powerTwoColor: 'purple',
    powerThreeColor: 'green',
    feedee: 'Kingpin (Wilson Fisk)',
    feeder: 'Bullseye (Dark Avengers)'
},{
  name: 'Steve Rogers (Super Soldier)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'red',
    powerTwoColor: 'blue',
    powerThreeColor: 'yellow',
    feedee: 'Winter Soldier',
    feeder: 'Steve Rogers (Captain America)'
},{
  name: 'Captain Marvel (Modern)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'red',
    powerTwoColor: 'black',
    powerThreeColor: 'yellow',
    feedee: 'Captain Marvel (Carol Danvers)',
    feeder: 'Captain Marvel (Ms. Marvel)'
},{
  name: 'Colossus',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'yellow',
    powerTwoColor: 'red',
    powerThreeColor: 'black',
    feedee: 'Wolverine (X-Force)'
},{
  name: 'Cyclops (Uncanny X-Men)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'red',
    powerTwoColor: 'yellow',
    powerThreeColor: 'black',
    feedee: 'Cyclops (Classic)'
},{
  name: 'Daken (Classic)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'purple',
    powerTwoColor: 'black',
    powerThreeColor: 'blue',
    feedee: 'X-23',
    feeder: 'Daken (Dark Avengers)'
},{
  name: 'Daredevil',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'blue',
    powerTwoColor: 'red',
    powerThreeColor: 'purple',
    feedee: 'Elektra (Unkillable)'
},{
  name: 'Deadpool (It\'s Me, Deadpool!)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'red',
    powerTwoColor: 'black',
    powerThreeColor: 'purple',
    feedee: 'Deadpool (Uncanny X-Force)'
},{
  name: 'Doctor Doom (Classic)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'black',
    powerTwoColor: 'blue',
    powerThreeColor: 'purple',
    feedee: 'Invisible Woman (Classic)'
},{
  name: 'Doctor Octopus (Otto Octavius)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'blue',
    powerTwoColor: 'black',
    powerThreeColor: 'green',
    feedee: 'Carnage'
},{
  name: 'Doctor Strange (Stephen Strange)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'blue',
    powerTwoColor: 'purple',
    powerThreeColor: 'yellow',
    feedee: 'Nova'
},{
  name: 'Elektra (Assassin)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'purple',
    powerTwoColor: 'red',
    powerThreeColor: 'black',
    feedee: 'Elektra (Unkillable)',
    feeder: ''
},{
  name: 'Gambit (Modern)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'purple',
    powerTwoColor: 'red',
    powerThreeColor: 'black',
    feedee: 'Rogue (Classic)'
},{
  name: 'Gamora (GotG)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'green',
    powerTwoColor: 'red',
    powerThreeColor: 'black',
    feedee: 'Star-Lord (Legendary Outlaw)'
},{
  name: 'Hawkeye (Hawkguy)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'purple',
    powerTwoColor: 'blue',
    powerThreeColor: 'black',
    feedee: 'Kate Bishop',
    feeder: 'Hawkeye (Modern)'
},{
  name: 'The Hood',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'yellow',
    powerTwoColor: 'black',
    powerThreeColor: 'blue',
    feedee: 'Ghost Rider (Johnny Blaze)'
},{
  name: 'The Hulk (Indestructible)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'green',
    powerTwoColor: 'red',
    powerThreeColor: 'black',
    feedee: 'The Hulk (Totally Awesome)',
    feeder: 'Moonstone'
},{
  name: 'Human Torch (Classic)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'red',
    powerTwoColor: 'black',
    powerThreeColor: 'green',
    feedee: 'The Thing',
    feeder: 'Human Torch (Johnny Storm)'
},{
  name: 'Iron Fist (Immortal Weapon)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'green',
    powerTwoColor: 'purple',
    powerThreeColor: 'black',
    feedee: 'Iron Fist (Danny Rand)'
},{
  name: 'Iron Man (Model 40)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'red',
    powerTwoColor: 'blue',
    powerThreeColor: 'yellow',
    feedee: 'Iron Man (Hulkbuster)'
},{
  name: 'Kamala Khan (Ms. Marvel)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'yellow',
    powerTwoColor: 'purple',
    powerThreeColor: 'green',
    feedee: 'Medusa'
},{
  name: 'Loki (Dark Reign)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'black',
    powerTwoColor: 'purple',
    powerThreeColor: 'green',
    feedee: 'Venom (Eddie Brock)'
},{
  name: 'Luke Cage (Hero for Hire)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'yellow',
    powerTwoColor: 'red',
    powerThreeColor: 'black',
    feedee: 'Luke Cage (Power Man)'
},{
  name: 'Magneto (Classic)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'yellow',
    powerTwoColor: 'red',
    powerThreeColor: 'blue',
    feedee: 'Professor X'
},{
  name: 'Mystique',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'purple',
    powerTwoColor: 'blue',
    powerThreeColor: 'black',
    feedee: 'Iceman'
},{
  name: 'Psylocke',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'red',
    powerTwoColor: 'blue',
    powerThreeColor: 'black',
    feedee: 'Peggy Carter',
},{
  name: 'The Punisher (Dark Reign)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40,
    powerOneColor: 'black',
    powerTwoColor: 'green',
    powerThreeColor: 'red',
    feedee: 'The Punisher (MAX)'
},{
  name: 'Quicksilver',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 40 ,
    powerOneColor: 'black',
    powerTwoColor: 'blue',
    powerThreeColor: 'green',
    feedee: 'War Machine'
},{
  name: 'Ragnarok',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'green',
    powerTwoColor: 'red',
    powerThreeColor: 'blue',
    feedee: 'X-23',
    feeder: 'Ares'
},{
  name: 'Rocket & Groot (Most Wanted)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'yellow',
    powerTwoColor: 'green',
    powerThreeColor: 'blue',
    feedee: 'Drax',
},{
  name: 'Sam Wilson (Falcon)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'yellow',
    powerTwoColor: 'blue',
    powerThreeColor: 'purple',
    feedee: 'Sam Wilson (Captain America)',
},{
  name: 'Scarlet Witch',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'purple',
    powerTwoColor: 'green',
    powerThreeColor: 'blue',
    feedee: 'Quake',
},{
  name: 'Sentry',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'red',
    powerTwoColor: 'green',
    powerThreeColor: 'yellow',
    feedee: 'Moon Knight',
},{
  name: 'She-Hulk',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'blue',
    powerTwoColor: 'green',
    powerThreeColor: 'red',
    feedee: 'Gwenpool',
},{
  name: 'Spider-Man (Classic)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'yellow',
    powerTwoColor: 'blue',
    powerThreeColor: 'purple',
    feedee: 'Spider-Man (Miles Morales)',
},{
  name: 'Squirrel Girl',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'yellow',
    powerTwoColor: 'purple',
    powerThreeColor: 'green',
    feedee: 'Ant-Man',
},{
  name: 'Star-Lord (Peter Quill)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'yellow',
    powerTwoColor: 'purple',
    powerThreeColor: 'green',
    feedee: 'Star-Lord (Legendary Outlaw)',
},{
  name: 'Storm (Mohawk)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'green',
    powerTwoColor: 'yellow',
    powerThreeColor: 'black',
    feedee: 'Thor (Goddess of Thunder)',
},{
  name: 'Thanos (Modern)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'black',
    powerTwoColor: 'purple',
    powerThreeColor: 'green',
    feedee: 'Spider-Woman',
},{
  name: 'Thor (Modern)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'red',
    powerTwoColor: 'yellow',
    powerThreeColor: 'green',
    feedee: 'Red Hulk',
    feeder: 'Thor (Marvel NOW!)'
},{
  name: 'Vision',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'blue',
    powerTwoColor: 'red',
    powerThreeColor: 'yellow',
    feedee: 'Wasp (Janet Van Dyne)'
},{
  name: 'Wolverine (Patch)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'green',
    powerTwoColor: 'red',
    powerThreeColor: 'yellow',
    feedee: 'Wolverine (X-Force)',
    feeder: 'Wolverine (Astonishing X-Men)'
},];

const twoStarChars = [
  {
  name: 'Ares',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'green',
    powerTwoColor: 'red',
    powerThreeColor: 'yellow',
    feedee: 'Raganarok'
}, {
  name: 'Black Widow (Original)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'purple',
    powerTwoColor: 'blue',
    powerThreeColor: 'black',
    feedee: 'Black Widow (Grey Suit)'
},
{
  name: 'Bullseye (Dark Avengers)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'black',
    powerTwoColor: 'purple',
    powerThreeColor: 'green',
    feedee: 'Bullseye (Classic)'
},{
  name: 'Steve Rogers (Captain America)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'red',
    powerTwoColor: 'blue',
    powerThreeColor: 'yellow',
    feedee: 'Steve Rogers (Super Soldier)'
},
{
  name: 'Captain Marvel (Ms. Marvel)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'red',
    powerTwoColor: 'black',
    powerThreeColor: 'yellow',
    feedee: 'Captain Marvel (Modern)'
},
{
  name: 'Daken (Dark Avengers)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'purple',
    powerTwoColor: 'black',
    powerThreeColor: 'blue',
    feedee: 'Daken (Classic)'
},
{
  name: 'Hawkeye (Modern)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'blue',
    powerTwoColor: 'red',
    powerThreeColor: 'purple',
    feedee: 'Hawkeye (Hawkguy)'
},
{
  name: 'Human Torch (Johnny Storm)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'red',
    powerTwoColor: 'black',
    powerThreeColor: 'green',
    feedee: 'Human Torch (Classic)'
},
{
  name: 'Magneto (Marvel NOW!)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'blue',
    powerTwoColor: 'purple',
    powerThreeColor: 'red',
    feedee: 'Magneto (Classic)'
},
{
  name: 'Moonstone',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'purple',
    powerTwoColor: 'red',
    powerThreeColor: 'black',
    feedee: 'Hulk (Indestructible)'
},
{
  name: 'Spider-Man (Bag-Man)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'purple',
    powerTwoColor: 'blue',
    powerThreeColor: 'yellow',
    feedee: 'Spider-Man (Classic)'
},
{
  name: 'Storm (Classic)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'green',
    powerTwoColor: 'yellow',
    powerThreeColor: 'black',
    feedee: 'Storm (Mohawk)'
},
{
  name: 'Thor (Marvel NOW!)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'red',
    powerTwoColor: 'yellow',
    powerThreeColor: 'green',
    feedee: 'Thor (Modern)'
},
{
  name: 'Wolverine (Astonishing X-Men)',
    pic: 'someurl.com',
    powerOne: 0,
    powerTwo: 0,
    powerThree: 0,
    totalPowerLevel: powerOne + powerTwo + powerThree,
    characterLevel: 15,
    powerOneColor: 'green',
    powerTwoColor: 'red',
    powerThreeColor: 'yellow',
    feedee: 'Wolverine (Patch)'
}
];

const determineNextCover = (characterLevel, rewardLevels) => {
  for (let i = 0; i < rewardLevels.length; i++) {
    if (characterLevel < rewardLevels[i]) {
      return `You get a new cover in ${rewardLevels[i] - characterLevel} levels.`;
    }
  }
}

const isChamped = (charLevel, championThreshold) => (charLevel >= championThreshold) ? true : false;
