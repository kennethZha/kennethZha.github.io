// declare variables here

	var x = 0;
function setup() {
  // put setup code here --> this runs once upon launch

  createCanvas(500, 500);
  background(0);

}


function draw() {
  // put drawing code here --> this loops every frame
  background(0);

  fill(0,255,0);
  rectMode(CENTER);
  rect(x,300,200,200);

  rect(x,100,50,50);
  
  x = x+random(1,10);
}


// write custom functions here
