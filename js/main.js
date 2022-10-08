let jacobPortfolioJS = (function() {
	const toggleParticleAnimation = () => {
		const particlesButton = document.querySelector("#particlesToggleButton");
		const playParticlesImage = document.querySelector("#playParticles");
		const pauseParticlesImage = document.querySelector("#pauseParticles");

		if(particlesButton && playParticlesImage && pauseParticlesImage) {
			if(pJSDom[0].pJS.particles.move.enable) {
				pJSDom[0].pJS.particles.move.enable = false;
				particlesButton.ariaLabel = "Play the particle background animation"
				playParticlesImage.classList.remove('h-hidden');
				pauseParticlesImage.classList.add('h-hidden');
				
			} else {			
				pJSDom[0].pJS.particles.move.enable = true;
				pJSDom[0].pJS.fn.particlesRefresh();
				particlesButton.ariaLabel = "Pause the particle background animation"
				playParticlesImage.classList.add('h-hidden');
				pauseParticlesImage.classList.remove('h-hidden');
			}	
		}	
	}
	return {
		'toggleParticleAnimation': toggleParticleAnimation,
	};
})() 
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../assets/particlesjs-config.json', function() {
	console.log('callback - particles.js config loaded');
});
  