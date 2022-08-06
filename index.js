// Sets random number for dice rolls
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Sets random images from dice1.png ~ dice6.png
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceImage1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;

// Change the dice img to correspond the numbers chosen
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Decide winning state
var state = "";
if(randomNumber1 == randomNumber2){
  state = "Draw!";
} else if (randomNumber1 > randomNumber2){
  state = "Player 1 Wins!";
} else{
  state = "Player 2 Wins!";
}

// Change to show result
document.getElementsByTagName("h1")[0].innerHTML = state;
