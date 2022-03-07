/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module

import { getFish, getMostHolyFish, getSoldierFish, getUnworthy } from "./FishData.js";
import { Fish } from "./Fish.js";

export const FishList = () => {

  // Get a reference to the `<section class="fishList">` element
  // const contentElement = document.querySelector(".fishList")
  const holyFishElement = document.querySelector(".holy-fish")  
  const soldierFishElement = document.querySelector(".soldier-fish")
  const unworthyFishElement = document.querySelector(".unworthy-fish")
  // const fishes = getFish()
  const holyFishes = getMostHolyFish()
  const soldierFishes = getSoldierFish()
  const unworthyFishes = getUnworthy()

  let holyFishHTMLRep = '';
  let soldierFishHTMLRep = '';
  let unworthyFishHTMLRep = '';

  // let fishHTMLRepresentation = ""; 

  // Loop over the array of fish
  for (const holyfish of holyFishes) {
  holyFishHTMLRep += Fish(holyfish);
  }
  for (const soldierFish of soldierFishes) {
    soldierFishHTMLRep += Fish(soldierFish);
  }
  for (const unworthyFish of unworthyFishes) {
    unworthyFishHTMLRep += Fish(unworthyFish);
  }

  // Add to the existing HTML in the content element
  holyFishElement.innerHTML += `
    ${holyFishHTMLRep}
  `
  soldierFishElement.innerHTML += `
  ${soldierFishHTMLRep}
  `
  unworthyFishElement.innerHTML += `
  ${unworthyFishHTMLRep}
  `
}