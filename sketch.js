var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight= random(400,1500);

  car=createSprite(70,200,50,50);
  wall=createSprite(1200, 200, 50, 150);

car.velocityX=+5;
}

function draw() {
  background(25);  
  if(car.x-wall.x<wall.width/2+car.width/2 && 
    wall.x-car.x<wall.width/2+car.width/2 && 
    car.y-wall.y<wall.height/2+car.height/2 && 
    wall.y-car.y<wall.height/2+movingRect.height/2
    )
    {car.shapeColor="red";
    wall.shapeColor="red";
  
  }
  else{car.shapeColor="green";
       wall.shapeColor="green";
  
  }
  drawSprites();
}

 