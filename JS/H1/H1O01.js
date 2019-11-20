function setup() {
  canvas = createCanvas(450,450);
  background('gray');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  // groene cirkel zonder rand
  
  noStroke('');
  fill('green');
  strokeWeight(25);
  ellipse(225,225,425);

  noStroke('');
  fill('white');
  strokeWeight(25);
  ellipse(225,225,300);
  
  // witte rechthoek met rode rand
  
  stroke('green');
  fill('white');
  strokeWeight(10);
  rect(125,125,200,200);  
}
