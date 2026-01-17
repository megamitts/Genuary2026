/* Genuary 2026 #3 - Fibonacci Forever */

let fib;
let colours = ['red','orange', 'yellow', 'green','blue', 'indigo','violet'];


function setup() {
  createCanvas(400, 400);
  fib = new Fib();

  background('#E0C9A6');

  let multy = 10;
  noStroke();
  translate(160, 260);
  fill('red');
  ellipse(0, 0, fib.n2 * multy, fib.n2 * multy);
  push();
  for (let i = 0; i < 7; i++) {
    fill(colours[i]);
    fib.next();
    translate(fib.n1 * multy, fib.n1 * multy + 1);
   rotate(-HALF_PI);
    ellipse(0, 0, fib.n2 * multy, fib.n2 * multy);
  }
  pop();
  
  // paper texture effect - draw thousands of random circles with a barely visible stroke
  
  translate(-160,-260); // pull it back to 0,0
  stroke(0,2); // barely visible stroke
  noFill();
  for(let i = 0; i <10000; i++){
    circle(random(400), random(400), random(10,50));
  }
  
}


class Fib {
  constructor() {
    this.n1 = 0;
    this.n2 = 1;

    
  }

  next() {
    let oldN1 = this.n1;
    let oldN2 = this.n2;

    this.n1 = this.n2;
    this.n2 = oldN1 + oldN2;

    
  }

}
