
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
});


var randomNumber = Math.floor(Math.random() * 101); //random integer from 1-100
var counter = 0; //sets up the counter variable
var userGuess; // creates variable to insert variable from user

$('#guessButton').click(function () {
userGuess = $('#userGuess').val();  //assigns inputs from the user
userGuess = parseInt(userGuess, 10); //ensures the user variable is an integer
var guessTry = newGame(userGuess); //passes the user variable to the function

})

function newGame(){

if ((randomNumber - guessTry) == 0)
    {
    $('#feedback').append('<p>' + "You Got it!!" +'</p>');
	counter = 0;
	}
else if ((randomNumber - guessTry) >= 50)
		{ 
		  counter++;
		   $('#feedback').append('<p>' + "You are very very Cold!!" + '</p>');
		   $('#guessList ul').append('<li>' + guessTry + '</li>');
		   $('#count').append(counter);
		}
else if ((randomNumber - guessTry) >= 30)
		{
		  counter++;
		  $('#feedback').append('<p>' + "You are Cold!!" + '</p>');
		  $('#guessList ul').append('<li>' + guessTry  + '</li>');
		  $('#count').append(counter);
		}
else if ((randomNumber - guessTry ) >= 15)
		{
		  counter++;
		  $('#feedback').append('<p>' + "You are getting Warm!!" +'</p>');
		  $('#guessList ul').append('<li>' + guessTry  + '</li>');
		  $('#count').append(counter);
		}
else if ((randomNumber - guessTry ) >= 10)
		{
		  counter++;
		  $('#feedback').append('<p>' + "You are getting very Warm!!" +'</p>');
		  $('#guessList ul').append('<li>' + guessTry  + '</li>');
		  $('#count').append(counter);
		}
else if ((randomNumber - guessTry) >= 1)
		{
		  counter++;
		  $('#feedback').append('<p>' + "You are getting very very Warm!!" + '</p>');
		  $('#guessList ul').append('<li>' + guessTry  + '</li>');
		  $('#count').append(counter);
		} 

}






