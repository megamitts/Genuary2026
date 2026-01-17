
let amplitude = 150;
  let centerY = 0;
  let speed = 0.005;
let rotation = 1;
let y = 0;

let stars = [];
const STAR_COUNT = 400;    // number of tiny boxes
const STAR_DEPTH = 2000;   // how far back stars spawn

function setup() {
  createCanvas(400, 400, WEBGL);
  
  // make stars
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: random(-800, 800),
      y: random(-800, 800),
      z: random(-STAR_DEPTH, 200)
    });
  }
}

function draw() {
  background(0);

  // box starfield.
  push();
  
  fill(255);
  

  for (let s of stars) {
    // move star toward the camera
    s.z += 6;

    // if it passes the camera, recycle far away
    if (s.z > 500) {
      s.x = random(-800, 800);
      s.y = random(-800, 800);
      s.z = -STAR_DEPTH;
    }

    push();
    translate(s.x, s.y, s.z);
    
    box(8);   //  star
    pop();
  }
  pop();
  

  // moving box cluster
  push();
  
  
  
  y = centerY + amplitude * sin(frameCount * speed);
  let x = centerY + amplitude * cos(frameCount * speed);

  translate(-x, -y, -800);
  rotateY(rotation);
  rotateX(rotation);
  rotateZ(tan(rotation));

  stroke(0);

  fill(255,0,0, 200);
  box(70, y, y*2);
  
  fill(0,0,255, 200);
  box(40, x*2, y);
  
  fill(0,255,0, 50);
  box(120, x*2, y*2);

  
  
  pop();
  
  rotation += 0.005;
}
