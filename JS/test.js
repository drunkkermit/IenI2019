function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  noStroke();

  fill('black');
  ellipse(225,225,300);

  noStroke();
  fill('pink');
  rect(125,125,200,200);
}