import { Location } from "./Location.js";
import { getLocation } from "./LocationData.js";

export const listOfLocations = () => {
  const contentElement = document.querySelector(".locationList")
  const locationz = getLocation()

  let locationHTMLRepresentation = "";

  locationz.forEach(element => {
    locationHTMLRepresentation += Location(element);
  })
  
  
  contentElement.innerHTML += `
  ${locationHTMLRepresentation}
  `
}



// export const FishList = () => {

//   // Get a reference to the `<section class="fishList">` element
//   const contentElement = document.querySelector(".fishList")
//   const fishes = getFish()


//   let fishHTMLRepresentation = ""; 

//   // Loop over the array of fish
//   for (const fish of fishes) {
//   fishHTMLRepresentation += Fish(fish);
// }

//   // Add to the existing HTML in the content element
//   contentElement.innerHTML += `
//     ${fishHTMLRepresentation}
//   `
// }