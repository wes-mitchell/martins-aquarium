export const Location = (locationObj) => {
	return `<article class="location-card">
				<h3 class="location-name">${locationObj.name}</h3>
				<ul>
					<li class="location-details">Step 1: ${locationObj.step1}</li>
					<li class="location-details">Step 2: ${locationObj.step2}</li>
					<li class="location-details">Step 3: ${locationObj.step3}</li>
				</ul>
        	</article>`
}