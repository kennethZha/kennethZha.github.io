// declare variables here

function setup() {
  // put setup code here --> this runs once upon launch
  createCanvas(windowWidth, windowHeight);
  background(255);
  textFont("Courier");

}

function draw() {
  // put drawing code here --> this loops every frame
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

setTimeout(arg1,6000);

function arg1() {
  background(255);
  fill(96);
  noStroke();
  textSize(15);
  text("5 %", 730, 100);
  rect(50,110,90,5);
}

setTimeout(arg2,9000);

function arg2() {
  background(255);
  fill(96);
  noStroke();
  textSize(15);
  text("13 %", 730, 100);
  rect(50,110,230,5);
}

setTimeout(arg3,20000);

function arg3() {
  background(255);
  fill(96);
  noStroke();
  textSize(15);
  text("27 %", 730, 100);
  rect(50,110,460,5);
}

setTimeout(arg4,40000);

function arg4() {
  background(255);
  fill(96);
  noStroke();
  textSize(15);
  text("45 %", 730, 100);
  rect(50,110,670,5);
}

setTimeout(arg5,60000);

function arg5() {
  background(255);
  fill(96);
  noStroke();
  textSize(15);
  text("63 %", 730, 100);
  rect(50,110,850,5);
}

setTimeout(arg6,80000);

function arg6() {
  background(255);
  fill(96);
  noStroke();
  textSize(15);
  text("99 %", 730, 100);
  rect(50,110,1345,5);
}

setTimeout(timeover,120000);

function timeover() {
  window.open("Bow.html","_self")

}
// write custom functions here
