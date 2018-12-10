var img;
var anthem;
function preload() {
  img = loadImage('americanflag.gif');
  anthem = loadSound('USAanthem.mp3');
}
function setup() {
    createCanvas(600, 600);
    image(img, 0, 0);
}
function draw() {
  stroke(100);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
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
  }
}
