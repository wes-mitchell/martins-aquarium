import { getTip } from "./TipData.js";
import { tip } from "./Tip.js";

export const tipList = () => {
  const contentElement = document.querySelector(".tiplist")
  const tipz = getTip()

  let tipHTMLRepresentation = "";
  
  for (const singleTip of tipz) {
    tipHTMLRepresentation += tip(singleTip);
  }

  contentElement.innerHTML += 
  `${tipHTMLRepresentation}`
}




// import { getFish } from "./FishData.js";
// import { Fish } from "./Fish.js";

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