var fixedRect, movingRect, rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect3=createSprite(100,100,50,50)
  rect3.shapeColor="blue"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(collisiondetection(movingRect,fixedRect)){
  movingRect.shapeColor="yellow"
  fixedRect.shapeColor="yellow"
  movingRect.scale=2
  fixedRect.scale=2
} else if(collisiondetection(movingRect,rect3)){
  movingRect.shapeColor="yellow"
  rect3.shapeColor="yellow"
  movingRect.scale=2
  rect3.scale=2
} else{
  movingRect.scale=1
  fixedRect.scale=1
  rect3.scale=1
  movingRect.shapeColor="green"
  fixedRect.shapeColor="green"
  rect3.shapeColor="blue"
}
 
  drawSprites();
}



