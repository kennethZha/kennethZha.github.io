// declare variables here
var cursorImage;
var cross;
var counter = 0;
var timeleft = 0;

 function preload () {
   cross = loadImage ('../../cursor.png');
 }

 function convertSeconds (s) {
   var min = floor(s / 60);
   var sec = s % 60;
   return nf(min,2) + ':' + nf(sec,2);
 }

function setup() {
  // put setup code here --> this runs once upon launch
  createCanvas(windowWidth, windowHeight);
  text('Courier');
  //noCursor();

  //timer
  var timer = select('#timer');
  timer.html(convertSeconds(timeleft + counter));

  function timeIt() {
    counter ++;
    timer.html(convertSeconds(timeleft + counter));
  }

  setInterval(timeIt, 1000);
}

function draw() {
  // put drawing code here --> this loops every frame
  if (mouseX > windowWidth - 150 && mouseY < 100) {
      cursor (cross);
    }
}

function mouseOver() {
  if (mouseX > windowWidth - 150 && mouseY < 100) {
    fill(0);
    rect(windowWidth - 200, 50,50,20);
    //fill(95,158,160);
    text('refresh?',windowWidth - 200, 50);
  }
}

// refreshing page function
function mouseClicked() {
  if (mouseX > windowWidth - 150 && mouseY < 80) {
          window.open("index.html","_self")
  }
  if (mouseX < 200 && mouseY < 80) {
      //addTime.html(timer + 20,true);
      color(255);
      text("hi", 100,100);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

hamster = setTimeout(arg1,6000);

function arg1() {
  fill(255);
  noStroke();
  textSize(14);
  text("- hamsters hard at work -", 640, 730);
  rect(40,750,90,5);
}

pizza = setTimeout(arg2,9000);

function arg2() {
  clear();
  fill(255);
  noStroke();
  textSize(14);
  text("- eating pizza -", 680, 730);
  rect(40,750,230,5);
}

setTimeout(arg3,20000);

function arg3() {
  clear();
  fill(255);
  noStroke();
  textSize(14);
  text("- taking a shit -", 680, 730);
  rect(40,750,460,5);
}

setTimeout(arg4,40000);

function arg4() {
  clear();
  fill(255);
  noStroke();
  textSize(14);
  text("- procrastinating -", 680, 730);
  rect(40,750,670,5);
}

setTimeout(arg5,60000);

function arg5() {
  clear();
  fill(255);
  noStroke();
  textSize(14);
  text("- sleeping -", 680, 730);
  rect(40,750,850,5);
}

setTimeout(arg6,80000);

function arg6() {
  clear();
  fill(255);
  noStroke();
  textSize(14);
  text("- hamsters working overtime -", 640, 730);
  rect(40,750,1345,5);
}

setTimeout(timeover,120000);

function timeover() {
  window.open("Bow.html","_self")

}
// write custom functions here
