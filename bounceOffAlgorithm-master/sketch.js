var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  edges = createEdgeSprites()

 
}

function draw() {
  background(0,0,0);  
  contact(fixedRect,movingRect);
  for(var t = 0;t < 4;t+=1){
  movingRect.bounceOff(edges[t]);
  }
  drawSprites();
}
