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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
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
    totalPowerLevel: 0,
    characterLevel: 255,
    powerOneColor: 'black',
    powerTwoColor: 'yellow',
    powerThreeColor: 'red',
    feeder: 'Wolverine (X-Force)'
  }
];

const fourStarChars = [];

const threeStarChars = [];

const twoStarChars = [];

const determineNextCover = (characterLevel, rewardLevels) => {
  for (let i = 0; i < rewardLevels.length; i++) {
    if (characterLevel < rewardLevels[i]) {
      return `You get a new cover in ${rewardLevels[i] - characterLevel} levels.`;
    }
  }
}

const isChamped = (charLevel, championThreshold) => (charLevel >= championThreshold) ? true : false;
