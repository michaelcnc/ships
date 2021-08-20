var ship, ship_no_light, ship_light;
var sea;

function preload() {
  ship_no_light = loadAnimation("ship-1.png", "ship-2.png");
  ship_light = loadAnimation("ship-3.png", "ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup() {
  createCanvas(1000, 800);
  ship = createSprite(500, 450, 20, 50);
  ship.addAnimation("no_light", ship_no_light);
  ship.addAnimation("light", ship_light)
  ship.scale = 0.2;

  sea = createSprite(0, 400, 2000, 800);
  sea.addImage("sea", seaImage);
  sea.scale = 0.5;
  sea.x = 1000;

  //adjust the depth
  sea.depth = ship.depth;
  ship.depth = ship.depth + 1;

}

function draw() {
  background("blue");
  sea.velocityX = 4;
  if (sea.x > 1000) {
    sea.x = 0;
  }

  if(keyDown("space")) {
    ship.changeAnimation("light", ship_light)
  } else  {
    ship.changeAnimation("no_light", ship_no_light);
} 

  drawSprites();
}