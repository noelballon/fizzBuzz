
$(document).ready(function() {

	 	var userInput = prompt("Please enter a number between 1 and 100");
	  	userInput = parseInt(userInput, 10);

	if ((userInput !== userInput) || (userInput > 100) || (userInput < 1)) {
	    var userInput = prompt("Not a valid entry, please try again");
	    userInput = parseInt(userInput, 10);

	if ((userInput !== userInput) || (userInput > 100) || (userInput < 1)) {
	      alert("Still not a valid entry, no worries we will choose for you");
	      userInput = Math.floor((Math.random() * 100) + 1);

	      alert("The random number we picked for you is " + userInput);
	    }

	  } else {
	    alert("You entered the number " + userInput);
  };


	for(var fb = 1; fb <=userInput; ++fb){

	 if(fb % 15 === 0){
	        document.write('FizzBuzz');
	        document.write('<br/>');

	    } else if(fb % 5 === 0){
	        document.write('Buzz');
	        document.write('<br/>');

	    } else if(fb % 3 === 0){
	        document.write('Fizz');
	        document.write('<br/>');

	    } else{
	        document.write(fb);
	        document.write('<br/>');
	    }
	  }

});


