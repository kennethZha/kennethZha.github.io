// declare variables here
var done = false;
var ellipseWidth;
var shape;

function setup() {
  // put setup code here --> this runs once upon launch
  createCanvas(windowWidth, windowHeight);
  textFont("Courier");
  ellipseWidth = windowWidth+windowHeight;
}

function draw() {
  // put drawing code here --> this loops every frame
  if(done == true){
    strokeWeight(60);
    stroke(95,158,160);
    noFill();
    ellipse(width/2.00, height/1.9, ellipseWidth);
    ellipseWidth -= (10,30);
    if(ellipseWidth <= 600){
      //window.open("../../Art75.html","_self")
      exit();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

setTimeout(timeover,500);

function timeover() {
  done = true;
}

setTimeout(arg1,2200);

function arg1() {
  textSize(23);
  fill(255);
  noStroke();
  text('Thank you for your patients',570,70);
}

setTimeout (arg2,2200);

function arg2() {
  noFill();
  stroke(255);
  strokeWeight(8);
  ellipse(736,417,600,600);
}

setTimeout (arg3,6000);

function arg3() {
  textSize(17);
  fill(255);
  noStroke();
  text('back',360,400);
  fill(255);
  triangle(320,395,340,380,340,410);
}

function mouseClicked() {
  if (mouseX > 320 && mouseX <400 && mouseY > 380 && mouseY < 410 ) {
    window.open("index.html","_self")
  }
}

setTimeout(arg4,120000);

function arg4() {
  window.open("index.html","_self")

}
// write custom functions here
