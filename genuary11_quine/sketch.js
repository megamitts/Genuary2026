function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let s = (setup.toString());
  let d = (draw.toString());
  textSize(20);
  text(s, 10,40);
  text(d, 10, 140);
}
