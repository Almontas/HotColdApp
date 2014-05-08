
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});
  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	/*--- Creates a new game ---*/
  	$(".new").click(function(){
  		location.reload();
  	});

//Main Application  	
var randomNumber = Math.floor(Math.random() * 101); //random integer from 1-100
var counter = 0; //sets up the counter variable
var userGuess; // creates variable to insert variable from user
$('#guessButton').click(function () {	
userGuess = $('#userGuess').val();  //assigns inputs from the user
userGuess = parseInt(userGuess, 10); //ensures the user variable is an integer
var guessTry = newGame(userGuess); //passes the user variable to the function
$("#userGuess").val('').focus(); 

})

function newGame(guessTry){

if (Math.abs((randomNumber - guessTry)) == 0)
    {	
    $('#feedback p').remove();			
    $('#feedback').append('<p>' + "You Got it!!" +'</p>');
    alert("You got it!!");
	counter = 0;
	 $('#count').html(counter);
	}
else if (Math.abs((randomNumber - guessTry)) >= 50)
		{ 
		  counter++;
		   $('#feedback p').remove();	
		   $('#feedback').append('<p>' + "You are very very Cold!!" + '</p>');
		   $('#guessList').append('<li>' + guessTry + '</li>');
		   $('#count').html(counter);
		}
else if (Math.abs((randomNumber - guessTry)) >= 20)
		{
		  counter++;
		  $('#feedback p').remove();	
		  $('#feedback').append('<p>' + "You are Cold!!" + '</p>');
		  $('#guessList').append('<li>' + guessTry  + '</li>');
		  $('#count').html(counter);
		}
else if (Math.abs((randomNumber - guessTry)) >= 15)
		{
		  counter++;
		  $('#feedback p').remove();		
		  $('#feedback').append('<p>' + "You are getting Warm!!" +'</p>');
		  $('#guessList').append('<li>' + guessTry  + '</li>');
		  $('#count').html(counter);
		}
else if (Math.abs((randomNumber - guessTry )) >= 7)
		{
		  counter++;
		  $('#feedback p').remove();	
		  $('#feedback').append('<p>' + "You are getting very Warm!!" +'</p>');
		  $('#guessList').append('<li>' + guessTry  + '</li>');
		  $('#count').html(counter);
		}
else if (Math.abs((randomNumber - guessTry)) >= 1)
		{
		  counter++;
		  $('#feedback p').remove();		
		  $('#feedback').append('<p>' + "You are getting very very Warm!!" + '</p>');
		  $('#guessList').append('<li>' + guessTry  + '</li>');
		  $('#count').html(counter);
		} 

}

});




