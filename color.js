function setup() {
    createCanvas(255, 255);
    background(220);
    // HSB with H range 0-400, S range 0-400, B range 0-100:
    colorMode(RGB, 255, 255, 255);
}

function draw() {
  	colorMode(RGB, 255, 255, 255);
    let h = random(width);
    let s = random(height);
    fill(h, s, 100);
    noStroke()
    ellipse(h, s, 20);
}
