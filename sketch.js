var bullet,wall;
var thickness,speed,weight;


function setup() {
  createCanvas(1600,400);

speed=random(223,321);
weight=random(30,52);
thickness=random(22,83);



  bullet=createSprite(50, 150, 40, 20);
  bullet.velocityX=speed;
  bullet.shapeColor="white";

  wall=createSprite(1200,100,thickness,height/2);
  wall.shapeColor=(80,80,80);
}

function draw() {
  background(225,225,225);  

  if(hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){

  wall.shapeColor="red";

}

if(damage<10){

wall.shapeColor="green";

}
  }



  drawSprites();
}


function hasCollided(bullet,wall){
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x

if(bulletRightEdge>=wallLeftEdge){

return true;

}

return false;

}







