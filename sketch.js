function setup() {
 var create=createCanvas(500,600);
  //canvas.parent('lienzo')
  background(0,0,200);
}

function draw() {
  fill(random(255),random(255),random(255));
  textSize(random(30));
  text("Javascript",random(500),random(600));
}
function mouseClicked(){
  background(0,0,200);
}