var movingRect,fixedRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(600, 200, 50, 50);
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x <= (movingRect.width-fixedRect.width)/2
  && fixedRect.x-movingRect.x <= (movingRect.width-fixedRect.width)/2
  && movingRect.y-fixedRect.y <= (movingRect.height-fixedRect.height)/2
  && fixedRect.y-movingRect.y <= (movingRect.height-fixedRect.height)/2){
    fixedRect.shapeColor="yellow";
    movingRect.shapeColor="yellow";
  }else{
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }

  drawSprites();
}