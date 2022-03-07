const fishCollection = [
  {            
    species: "Yellow Tang",
    length: 15,
    location: "Honolulu, HI",
    saltwater: true,
    image: "yellow-tang.jpg",
    name: "Frodo",
    food: "insects"
  },
  {
    species: "Sword Fish",
    length: 2.5,
    location: "Miama, Florida",
    saltwater: true,
    image: "swordfish.jpg",
    name: "Sharpy",
    food: "gummy bears"
  },
  {
    species: "Shark",
    length: 25,
    location: "Los Angeles, CA",
    saltwater: true,
    image: "shark.jpg",
    name: "Bruce",
    food: "Yellow Tang"
  },
  {
    species: "Northern Pike",
    length: 9,
    location: "Rapid City, SD",
    saltwater: false,
    image: "northern-pike.jpg",
    name: "Pikey",
    food: "Carp"
  },
  {
    species: "Walleye",
    length: 13.5,
    location: "St Paul, MN",
    saltwater: false,
    image: "Walleye.jpg",
    name: "Walley",
    food: "Algae"
  }
]

export const getFish = () => {
  return fishCollection
};

export const getMostHolyFish = () => {
  const holyFishArray = getFish().filter(fish => {
    return fish.length % 3 === 0
  })
  return holyFishArray
}

export const getSoldierFish = () => {
  const soldiersArray = getFish().filter(fish => {
    return fish.length % 5 === 0 && fish.length % 3 !== 0
  })
  return soldiersArray
}

export const getUnworthy = () => {
  const unworthyArray = getFish().filter(fish => {
    return fish.length % 3 !== 0 && fish.length % 5 !== 0
  })
  return unworthyArray
}