function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  var y1 = 5
  var y2 = 80
  var y3 = 120
  var y4 = 300
  var y5 = 395
  var x1 = 50
  var x2 = 175
  var x3 = 200
  
  background(220);
  noStroke();
	strokeCap(SQUARE);

  fill(220, 0, 0);
  rect(x1, y1, x3-x1, y2)
  rect(x3, y2, width-x3, y3-y2);
  
  fill(0, 120, 255);
  rect(0, y3, x1, y4-y3)
  rect(x3, y4, width-x3, y5-y4)
  
  fill(255, 255, 0)
  rect(x2, y3, x3-x2, y4-y3)
  
	stroke(0)
	strokeWeight(10);
  line(0, y1, width, y1);
	line(0, y2, width, y2);
  line(0, y3, width, y3);
  line(0, y4, width, y4);
  line(0, y5, width, y5);
  line(x1, 0, x1, height);
  line(x2, y2, x2, y4);
  line(x3, 0, x3, height)
  

}
