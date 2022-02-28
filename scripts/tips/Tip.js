
export const tip = (tipObj) => {
	return `<article class="tip-card">
				<h3 class="tip-name">${tipObj.name}</h3>
				<ul>
					<li class="tips">Tip #1: ${tipObj.tip1}</li>
					<li class="tips">Tip #2: ${tipObj.tip2}</li>
					<li class="tips">Tip #3: ${tipObj.tip3}</li>
					<li class="tips">Tip #4: ${tipObj.tip4}</li>
				</ul>
        	</article>`
}