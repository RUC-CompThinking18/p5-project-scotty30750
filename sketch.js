var img;//establishing image variable of blank American flag so it can be later colored in
var anthem;//establishing sound variable so it can play (USA national anthem) while coloring in flag
function preload() {
  img = loadImage('americanflag.gif');
  anthem = loadSound('USAanthem.mp3');
}//function loading my image and mp3 file of national anthem
function setup() {
    createCanvas(600, 600);//create canvas for my flag to appear on
    image(img, 0, 0);
}
function draw() {
  stroke(100);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);//function- if the mouse is pressed then it will draw lines
  }
}
function mouseClicked() {
  if (value === 0) {
    value = 100;
  } else {
    value = 0;
  }
}
function mousePressed() {
  if ( anthem.isPlaying() ) {
    anthem.stop();
  } else {
    anthem.play();
  }//if the mouse is pressed then the USA national anthem will be played simultaneously while coloring in American flag :) !
}
