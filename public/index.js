var randomNumber1 = [];
var randomNumber2 = [];
randomNumber1 = Math.floor(Math.random()*6);
randomNumber2 = Math.floor(Math.random()*6);

var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var randomImage1 = images[randomNumber1];
var randomImage2 = images[randomNumber2];



document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if(randomNumber1 > randomNumber2){
  document.getElementById("title").innerHTML ="Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
  document.getElementById("title").innerHTML ="Player 2 wins";
}
else{
  document.getElementById("title").innerHTML ="DRAW, Refresh again";
}
