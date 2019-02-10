function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  var x1 = mouseX - 160
  var x2 = mouseX
  var x3 = x2 + 100
  var y1 = mouseY - 80
  var y2 = mouseY
  var y3 = y2 + 120
  
  background(220);
  noStroke();
	strokeCap(SQUARE);
  
  fill(220, 0, 0);
  rect(0, 0, x2, y1)
  
  fill(0, 120, 255);
  rect(x2, y2, x3-x2, y3-y2)
  
  fill(255, 255, 0)
  rect(0, y2, x1,height)
  
  stroke(0)
	strokeWeight(10);
  line(x1, y2, x1, height)
  line(x2, 0, x2, height)
  line(x3, y2, x3, height)
  line(0, y1, width, y1)
  line(0, y2, width, y2)
  line(x2, y3, x3, y3)
}
