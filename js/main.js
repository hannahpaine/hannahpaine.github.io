/* This is a multi line JS comment - "block"*/
// This is a single line comment - don't need to close it

//alert($);
//$ symbol = jQuery shortcut - whenever referenced, means we are using jQuery
// This is an alert box so that we can see jQuery is running if it wasn't saved as comment
// Every JS code ends in a semicolon;
// If you make a mistake in JS, none of the code will run
// Brackets can't overlap, they need to be nested
// JS never has spaces in - uses camelCase
// when you use = once on it's own, you are assigning value in a variable
// when you use == you are asking js a question
//.on('keyDown') means when a button is pressed 
//.on('change') is when the box changes (text)

// Variables
// 'var' in JS is a variable and it makes the js store the data in front of the variable
// an empty variable is 'null' i.e. if you haven't defined the value
// NAME VALUE TYPE
// name 'Hannah' string
// blah null undefined
/* Data types 
- strings (text inside '' or "" but you can't use the same type of delimiter within the quote)
- numbers
- Boolean - true and false statements e.g. isFemale true boolean
*/

// Comparisons
// Equality comparisons - is something equal to something? This returns a boolean response
/* There are the following comparisons:
== equal to (compares a value)
=== exactly equal to (compares value and type)
!= is not equal to
!== is not equal to (again for value and type - so any text)
> greater than
< less than
>= greater than or equal to
<= less than or equal to
&& is 'AND' - both variables must be true for the code to run
|| is 'OR' - only one needs to be true for the statement to be satisfied

*/

function askQuestions() {



	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;

	console.log(fullName);

	var age = prompt('How old are you?');
	age = parseInt(age); //this converts any text to number

	if (age >= 18) {
		console.log('User is an adult');
	}
	else if (age >= 13){
		console.log('User is a moody teenager - avoid at all costs');
	}
	else{
		console.log('User is a child');
	}

	if (firstName === 'General' && lastName !== 'Assembly')
	{
		console.log('The General is on the site, smarten up')
		alert('Well hello there General!');
	}
	 if (firstName !=='General' && lastName !== 'Assembly')
	{
		console.log("This is not a General, but be nice and give them a casual wave.");
		alert('👋👋👋👋👋👋👋')
	}

	var faveColour = prompt('What is your favourite colour?').toLowerCase().trim();
	//the .toLowerCase and .trim make sure that if there are any random capitals thrown in
	//they are ignored/transformed for JS to read

	if (faveColour === 'red'
		||faveColour === 'yellow'
		||faveColour === 'blue'
		||faveColour === 'green') {
	$('h1').css('color', faveColour);
	// This changes the header to one of the above colours, if it was their favourite!
	}

}

// This is an array - a way of organising data

//When the page has loaded...
$(function(){

	$('img').on('click', askQuestions);
		// When the user clicks H2
		$('H2').on('click', function(){
		// the word 'on' tells jquery to listen out for an event - in this case, click
		//then the code between the curly brackets will run

			//toggle the next element (not hide or it won't come back!)
			$(this).next().slideToggle(1000);
			//next refers to the next element in the DOM (Document Object Model)
		});
});

