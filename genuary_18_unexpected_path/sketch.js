let piDigits;
let walker;
let index = 0;

function preload() {
  rand = int(random(178953589793238462643, 3141592653589793238462643));
  piDigits = rand.toString();
}

function setup() {
  createCanvas(400, 400);
  background(0);
  walker = createVector(width / 2, height / 2);
  //stroke(255);
  //strokeWeight(2);
}

function draw() {
  
  
  
  // Get current digit
  stroke(random(50,200));
  let digit = int(piDigits.charAt(index));
  strokeWeight(random(digit));
  
  // Map digit to movement direction
  // 0-1: up, 2-3: right, 4-5: down, 6-7: left, 8-9: random diagonal
  let step = random(5);
  if (digit <= 1) {
    walker.y -= step;
  } else if (digit <= 3) {
    walker.x += step;
  } else if (digit <= 5) {
    walker.y += step;
  } else if (digit <= 7) {
    walker.x -= step;
  } else {
    walker.x += random([-step, step]);
    walker.y += random([-step, step]);
  }

  // Draw the step
  point(walker.x, walker.y);

  // Wrap around edges
  if (walker.x < 0) walker.x = width;
  if (walker.x > width) walker.x = 0;
  if (walker.y < 0) walker.y = height;
  if (walker.y > height) walker.y = 0;

  // Move to next digit
  index++;
  if (index >= piDigits.length) {
    index = 0; //loop
  }
  
  
}
