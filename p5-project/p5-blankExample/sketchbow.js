// declare variables here
var done = false;
var ellipseWidth;

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
    stroke(173, 224,255);
    noFill();
    ellipse(width/2.05, height/1.6, ellipseWidth);
    ellipseWidth -= 10;
    if(ellipseWidth <= 0){
      window.open("../../index.html","_self")
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

setTimeout(timeover,5800);

function timeover() {
  done = true;
}


// write custom functions here
