/**
 *  Fish which renders individual fish objects as HTML
 */

 export const Fish = (fishObj) => {
	return `<article class="fish-card">
				<div><img class="fish-image" src="images/${fishObj.image}" /></div>
				<h3 class="fish-name">${fishObj.name}</h3>
				<ul>
					<li class="fish-details">Species: ${fishObj.species}</li>
					<li class="fish-details">Length: ${fishObj.length} inches</li>
					<li class="fish-details">Location: ${fishObj.location}</li>
					<li class="fish-details">Saltwater: ${fishObj.saltwater}</li>
          <li class="fish-details">Food: ${fishObj.food}</li>
				</ul>
        	</article>`
}