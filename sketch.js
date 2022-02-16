let x=300; 
let y=20
function setup() {
  createCanvas(400,200);
  // put setup code here
}

function draw() {
  background(200);
  line(200,0,200,200);
  strokeWeight(2);
  //triangle
  fill(228,21,21);
  triangle(100,20,80,40,120,40);
  triangle(55,120,80,80,80,120);
  triangle(145,120,120,80,120,120);
  //rect
  fill(247,250,96);
  rect(80,40,40,80);
  //ellipse
  fill(21,90,228);
  ellipse(100,70,20,20);

  //triangle
  fill(228,21,21);
  triangle(x,y,x-20,y+20,x+20,y+20);
  triangle(x-45,y+100,x-20,y+60,x-20,y+100);
  triangle(x+45,y+100,x+20,y+60,x+20,y+100);
  //rect
  fill(247,250,96);
  rect(x-20,y+20,40,80);
  //ellipse
  fill(21,90,228);
  ellipse(x,y+50,20,20);

  y=y-2;
  if(y<0-100) y=400
  // put drawing code here
}