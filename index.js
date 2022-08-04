
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceNumber = "dice" + randomNumber1 + ".png";

var randomImgSource = randomDiceNumber;

var image1 = document.querySelectorAll("img")[0];

   image1.setAttribute("src", randomImgSource);

   var randomNumber2 = Math.floor(Math.random() * 6) + 1;

   var randomDiceNumbe = "dice" + randomNumber2 + ".png";

   var randomImgSourc =  randomDiceNumbe;

   var image2 = document.querySelectorAll("img")[1];

      image2.setAttribute("src", randomImgSourc);

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber1 <randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML="Both are Win!";
}
