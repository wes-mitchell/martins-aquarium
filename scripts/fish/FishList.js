/**
 *  FishList renders individual fish objects as HTML
 */

// TODO: Import `getFish` from the data module

import { getFish } from "./FishData.js";
import { Fish } from "./Fish.js";

export const FishList = () => {

  // Get a reference to the `<section class="fishList">` element
  const contentElement = document.querySelector(".fishList")
  const fishes = getFish()


  let fishHTMLRepresentation = ""; 

  // Loop over the array of fish
  for (const fish of fishes) {
  fishHTMLRepresentation += Fish(fish);
}

  // Add to the existing HTML in the content element
  contentElement.innerHTML += `
    ${fishHTMLRepresentation}
  `
}