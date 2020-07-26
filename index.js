//image 1
var a = Math.random();
a = a * 6;
a = Math.floor(a) + 1;

var image = "dice" + a + ".png";
var source = "images/" + image;

document.querySelectorAll("img")[0].setAttribute("src", source);

//image 2
var a1 = Math.random();
a1 = a1 * 6;
a1 = Math.floor(a1) + 1;

var image1 = "dice" + a1 + ".png";
var source1 = "images/" + image1;

document.querySelectorAll("img")[1].setAttribute("src", source1);

// Text for wiinners and losers

if (a > a1) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} else if (a < a1) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
