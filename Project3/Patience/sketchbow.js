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
    if(ellipseWidth <= windowHeight/1.3){
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
  text('Thank you for your patience',windowWidth/2.7,70);
}

setTimeout (arg2,2200);

function arg2() {
  noFill();
  stroke(255);
  strokeWeight(8);
  ellipse(windowWidth/2,windowHeight/1.9,ellipseWidth);
}

setTimeout (arg3,6000);

function arg3() {
  textSize(17);
  fill(255);
  noStroke();
  text('back',windowWidth/4.2,windowHeight/2);
  fill(255);
  triangle(windowWidth/4.6,windowHeight/2.025,windowWidth/4.3, windowHeight/1.95,windowWidth/4.3, windowHeight/2.1);
}

function mouseClicked() {
  if (mouseX > windowWidth/4.6 && mouseX <windowWidth/3.5 && mouseY > windowHeight/2.1 && mouseY < windowHeight/1.95 ) {
    window.open("index.html","_self")
  }
}

setTimeout(arg4,30000);

function arg4() {
  window.open("index.html","_self")

}
// write custom functions here
