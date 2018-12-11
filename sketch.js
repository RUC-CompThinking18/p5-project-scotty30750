var img;//establishing image variable of blank American flag so it can be later colored in
var anthem;//establishing sound variable so it can play (USA national anthem) while coloring in flag
var colornow;
function preload() {
  img = loadImage('americanflag.gif');
  anthem = loadSound('USAanthem.mp3');
}//function loading my image and mp3 file of national anthem
function setup() {
    createCanvas(602, 600);//create canvas for my flag to appear on
    image(img, 0, 0);
    colornow = color("red");
}
function draw() {
  stroke("black");
  noFill();
  if (mouseIsPressed && mouseX < 571) {
    push();
    stroke(colornow);
    fill(colornow);
    /*
    ellipse(mouseX, mouseY, 4);//function- if the mouse is pressed then it will draw lines
    */
    strokeWeight(4);
    line(mouseX, mouseY, pmouseX, pmouseY);
    pop();
  }
  else if (mouseIsPressed && mouseX >= 571 ){
    var pixel = get(mouseX, mouseY);
    console.log(pixel);
    colornow = color(pixel[0], pixel[1], pixel[2])
  }
  push();
  stroke('black');
  fill('blue');
  rect(570, 0, 30, 30);
  fill('red');
  rect(570, 30, 30, 30);
  pop();

}
/*
function mouseClicked() {
  if (value === 0) {
    value = 100;
  } else {
    value = 0;
  }
}
*/
function mousePressed() {
  if ( anthem.isPlaying() ) {
    anthem.stop();
  } else {
    anthem.play();
  }//if the mouse is pressed then the USA national anthem will be played simultaneously while coloring in American flag :) !
}
