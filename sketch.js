function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background("black"); 
  
  hr = hour();
  mn = minute();
  sc = second();

 angleMode(DEGREES);
scAngle = map(sc, 0, 60, 0, 360);
mnAngle = map(mn, 0, 60, 0, 360);
hrAngle = map(hr, 0, 12, 0, 360);

translate(200,200);
rotate(-90);
noFill();
push();
rotate(scAngle);
stroke(255,0,0);

strokeWeight(7);
arc(0,0,250,250,0,scAngle);
line(0,0,100,0);
pop()

push();
rotate(mnAngle);
stroke(0,255,0);
strokeWeight(7);
arc(0,0,270,270,0,mnAngle);
line(0,0,100,0);
pop()

push();
rotate(hrAngle);
stroke(0,0,255);
strokeWeight(7);
arc(0,0,290,290,0,hrAngle);
line(0,0,100,0);
pop()
}