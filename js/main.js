let jacobPortfolioJS = (function() {
	sayHelloFormValidation = (input) => {		
		let inputName = input.name;
		let inputErrorOutputClass = inputName+"Error";
		let errorMessageElement = document.querySelector(`#${inputErrorOutputClass}`);
		let errorMessage = "";
		let isValid = input.checkValidity();
		let isRequired = false;
		if(input.hasAttribute('required')){
			isRequired = true;
		}	
		let isEmpty = (input.value === "" || input.value === null); 
		console.log(isEmpty);
		if (!isValid) {
			switch(inputName) {
				case "name":
					errorMessage = "Letters and spaces only.";
					if(isRequired && isEmpty) {
						errorMessage = "Name is required";
					}
				  	// code block
				  break;
				case "email":
					errorMessage = "Invalid email Format"
					if(isRequired && isEmpty) {
						errorMessage = "Email is required";
					}				
				  // code block
				  break;
				case "topic":
					errorMessage = "Letters and numbers only.";
					if(isRequired && isEmpty) {
						errorMessage = "Topic is required";
					}
				  // code block
				  break;
				case "message":
					if(isRequired && isEmpty) {
						errorMessage = "Message is required";
					}
				  // code block
				  break;			
			}		
		}
		errorMessageElement.textContent = errorMessage; 
	}

	return {
		  'sayHelloFormValidation': sayHelloFormValidation,
	  };
})() 

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', '../assets/particlesjs-config.json', function() {
	console.log('callback - particles.js config loaded');
  });