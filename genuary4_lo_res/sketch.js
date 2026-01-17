let img;
let pixelation_level = 3;
let startTime;
let waitTime = 2000;

function preload() {
  img = loadImage("kick.png"); /* uses the Kickstart 1.3 logo from the Amiga in the original sketch */
}

function setup() {
  createCanvas(300, 300);
  startTime = millis();
  pixelDensity(1);
  frameRate(5);
    }


function draw(){
  
  image(img, 0, 0, width, height);
  loadPixels();
  
  noStroke();
  
  if (millis() - startTime >= waitTime) {
  
  for (let x = 0; x < width; x += pixelation_level) {
    for (let y = 0; y < height; y += pixelation_level) {
      
      let i = (x + y * width) * 4;

      let r = pixels[i + 0];
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let a = pixels[i + 3];

      fill(r, g, b, a);
      square(x, y, pixelation_level);
  
}
  }
  
  pixelation_level ++;
  
}
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 40);
  }
}
