var fixedRect,movingRect, obstacle1, obstacle2, obstacle3, obstacle4;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "blue";
  movingRect=createSprite(400,200,80,30);
  movingRect.shapeColor = "blue";
  obstacle1 = createSprite(100,100,50,50);
  obstacle1.shapeColor = "blue";
  obstacle2 = createSprite(200,100,50,50);
  obstacle2.shapeColor = "blue";
  obstacle3 = createSprite(300,100,50,50);
  obstacle3.shapeColor = "blue";
  obstacle4 = createSprite(400,100,50,50);
  obstacle4.shapeColor = "blue";

}

function draw() {
  background(0); 
  movingRect.x =  World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,obstacle4)){
    movingRect.shapeColor = "yellow";
    obstacle4.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "blue";
    obstacle4.shapeColor = "blue";

  }


  
  drawSprites();
}

