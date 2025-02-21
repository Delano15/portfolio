let cols, rows;
let scl = 20;
let particles = [];
let flowfield;
let zoff = 0;

function setup() {
  createCanvas(600, 400);
  cols = floor(width / scl);
  rows = floor(height / scl);
  flowfield = new Array(cols * rows);

  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  background(0, 10); // Lichte fade voor motion trail effect
  let yoff = 0;

  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 2;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += 0.1;
    }
    yoff += 0.1;
  }
  zoff += 0.01;

  for (let p of particles) {
    p.follow(flowfield);
    p.update();
    p.edges();
    p.show();
  }
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 0.6;
    this.prevPos = this.pos.copy();
  }

  follow(vectors) {
    let x = floor(this.pos.x / scl);
    let y = floor(this.pos.y / scl);
    let index = x + y * cols;
    if (vectors[index]) {
      this.applyForce(vectors[index]);
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  edges() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.prevPos.set(this.pos);
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.prevPos.set(this.pos);
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.prevPos.set(this.pos);
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.prevPos.set(this.pos);
    }
  }

  show() {
    stroke(255, 150);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.prevPos.set(this.pos);
  }
}
