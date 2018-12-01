// declare variables here
var cursorImage;
var cross;
var counter = 0;
var timeleft = 0;

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

// refreshing page function
function mouseClicked() {
  if (mouseX > windowWidth - 150 && mouseY < 80) {
          window.open("index.html","_self")
  }
  if (mouseX < 200 && mouseY < 80) {
      //addTime.html(timer + 20,true);
      color(255);
      text("hi", windowWidth/38,100);
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
  text("- hamsters hard at work -", windowWidth/2.31, windowHeight/1.09);
  rect(windowWidth/38,windowHeight/1.06,windowWidth/20,5);
}

pizza = setTimeout(arg2,9000);

function arg2() {
  clear();
  fill(255);
  noStroke();
  textSize(14);
  text("- eating pizza -", windowWidth/2.2, windowHeight/1.09);
  rect(windowWidth/38,windowHeight/1.06,windowWidth/7,5);
}

setTimeout(arg3,20000);

function arg3() {
  clear();
  fill(255);
  noStroke();
  textSize(14);
  text("- taking a shit -", windowWidth/2.2, windowHeight/1.09);
  rect(windowWidth/38,windowHeight/1.06,windowWidth/4,5);
}

setTimeout(arg4,40000);

function arg4() {
  clear();
  fill(255);
  noStroke();
  textSize(14);
  text("- procrastinating -", windowWidth/2.22, windowHeight/1.09);
  rect(windowWidth/38,windowHeight/1.06,windowWidth/2.3,5);
}

setTimeout(arg5,60000);

function arg5() {
  clear();
  fill(255);
  noStroke();
  textSize(14);
  text("- sleeping -", windowWidth/2.18, windowHeight/1.09);
  rect(windowWidth/38,windowHeight/1.06,windowWidth/1.5,5);
}

setTimeout(arg6,80000);

function arg6() {
  clear();
  fill(255);
  noStroke();
  textSize(14);
  text("- hamsters working overtime -", windowWidth/2.33, windowHeight/1.09);
  rect(windowWidth/38,windowHeight/1.06,windowWidth/1.08,5);
}

setTimeout(timeover,120000);

function timeover() {
  window.open("Bow.html","_self")

}
// write custom functions here
