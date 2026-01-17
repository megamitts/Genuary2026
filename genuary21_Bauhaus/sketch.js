/* Uses P5js 2 but with 1.x preload addition */

let font;

function preload(){
  
  font = loadFont('BauhausRegular.ttf');
  
}

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background('#E0C9A6');
  
  
  
  strokeWeight(3);
  stroke(0);
  line(10,40, 390, 40);
  line(10,60, 390, 60);
  
  line(50,20, 50, 100);
  
  
  noStroke();
  fill('#E97451');
  circle(340,110, 200);
  
  rect(100,100,200,300);
  
  
  
  
  fill('#E0C9A6');
  //fill(0);
  
  rect(290,160,100,300, 75, 75, 0, 0)
  
  strokeWeight(3);
  stroke(0)
  
  
  line(360,165, 360,340);
  line(340, 161, 340, 340);
  line(300, 290, 380, 290);
  
  noStroke();
  
  fill('#E97451');
  
  triangle(100,100,300,18,300,100);
  
  
  
  
  //Carole Lommbard
  push();
  
  strokeWeight(3);
  
  
  
  
  noFill();
  
  translate(-30,80);
  
  //hair top
  stroke('#FFF01F');
  bezier(240,70, 240,60,175,45,165,120);
  bezier(165,120,120,180, 160, 180, 160, 200);
  
  //hair fringe
  stroke('#FFF01F');
  bezier(240,75, 240,70, 175, 55, 190, 120);
  
  beginShape();
  vertex(190,120);
  splineVertex(180, 121);
  splineVertex(188, 140);
  splineVertex(175, 160);
  splineVertex(185, 175);
  splineVertex(170, 190);
    
  endShape();
  
  //hair bottom right
  
  beginShape();
  splineVertex(245,200);
  splineVertex(250,198);
  splineVertex(257,188);
  splineVertex(267,180);
  splineVertex(268,165);
  splineVertex(270,155);
  splineVertex(268,150);
  
  
  endShape();
  
  stroke('#FBFFFF');
  //neck
  bezier(185,190,185,190,185,280,195,280);
  
  bezier(240,190, 240, 190, 240, 230, 245, 230);
  
  
  //head
  stroke('#FBFFFF');
  bezier(240,75, 300,115, 240, 220, 195, 180 );
  
  
  
  //martini
  stroke('#39ff14');
  triangle(265, 240, 265,210, 295, 240);
  //stem & foot
  line(265,240, 245, 260);
  
  line(240,255, 250, 265);
  circle(275, 232, 8);
  
  
  //hand
   stroke('#FBFFFF');
  line(250,245, 285,245);
  line(255,255, 275, 255);
  line(260,265, 275, 260);
  
  beginShape();
  splineVertex(260,272);
  splineVertex(280,270);
  splineVertex(300,275);
  
  endShape();
  
  bezier(285,245, 290,245, 300,260 ,310,260);
  
  
  //face
  //nose
  stroke('#FBFFFF');
  bezier(230,150,235,120,240,120,250,110);
  
  //lips
  stroke('#FF3131');
  
  beginShape();
  splineVertex(215,163);
  splineVertex(220,160);
  splineVertex(225,165);
  
  splineVertex(235,163);
    
  endShape();
  
  beginShape();
  splineVertex(216, 166);
  splineVertex(221, 170);
  splineVertex(233, 167);
  endShape();
  
  //eyebrow
  stroke('#FFF01F');
  bezier(205,90, 210,95, 215, 100, 220, 110);
  
  //left eye
  stroke('#1F51FF');
  bezier(200, 110, 205, 95, 215,110, 215, 125 );
  
  //right eye
  
  bezier(240, 130, 245, 125, 250, 115, 255, 125);
  
  pop();
  
  //text
  push();
  strokeWeight(1);
  angleMode(DEGREES);
  translate(-25, 72);
  rotate(-23)
  stroke(0);
  fill(0);
  textFont(font);
  textSize(25);
  text('CAROLE LOMBARD', 100, 100)
  
  pop();
  
  textFont(font);
  stroke(0);
  fill(0);
  
  
  
  strokeWeight(1);
  
  textSize(23);
  text('TO BE or', 0, 200);
  text('NOT to BE', 0, 230);
  
  
  text('3/6/1942', 300,380);
  // texture
  stroke(0,5);
  noFill();
  for(let i = 0; i < 1000; i++){
    
    circle(random(400), random(400), random(50,100));
    
  }
}
