/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete this
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

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
  }
]

export const getFish = () => {
  return fishCollection
};