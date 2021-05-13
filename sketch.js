var bow, arrow, background, green_group, red_group, pink_group, blue_group, arrow_group;
var bowImg, arrowImg, green_balloonImg,
  red_balloonImg, pink_balloonImg, blue_balloonImg,
  backgroundImg;

var score = 0

function preload() {

  backgroundImg = loadImage("background0.png");
  arrowImg = loadImage("arrow0.png");
  bowImg = loadImage("bow0.png");
  green_balloonImg = loadImage("green_balloon0.png");
  red_balloonImg = loadImage("red_balloon0.png");
  pink_balloonImg = loadImage("pink_balloon0.png");
  blue_balloonImg = loadImage("blue_balloon0.png");
}

function setup() {
  createCanvas(400, 400);

  //creating background
  scene = createSprite(0, 0, 400, 400);
  scene.addImage(backgroundImg);
  scene.scale = 2.5

  // creating bow to shoot arrow
  bow = createSprite(380, 220, 20, 50);
  bow.addImage(bowImg);
  bow.scale = 1;

  score = 0;
  
  green_group = new Group();
  red_group = new Group();
  pink_group = new Group();
  blue_group = new Group();
  arrow_group = new Group();
}

function draw() {
  background(0);
  // moving ground
  scene.velocityX = -3

  if (scene.x < 0) {
    scene.x = scene.width / 2;
  }

  //moving bow
  bow.y = World.mouseY

  // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();

  }

  //creating continous balloons
  var select_balloon = Math.round(random(1, 4));

  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else if (select_balloon == 4) {
      pinkBalloon();
    }
  }
  
  if(arrow_group.isTouching(red_group)) {
    red_group.destroyEach();
    arrow_group.destroyEach();
    score = score + 1;
  }
  
  if(arrow_group.isTouching(pink_group)) {
    pink_group.destroyEach();
    arrow_group.destroyEach();
    score = score + 1;
  }
  
   if(arrow_group.isTouching(blue_group)) {
    blue_group.destroyEach();
    arrow_group.destroyEach();
    score = score + 2;
  }
  
   if(arrow_group.isTouching(green_group)) {
    green_group.destroyEach();
    arrow_group.destroyEach();
    score = score + 3;
  }

  drawSprites();
  text("Score: " + score, 300, 50);
}


// Creating  arrows for bow
function createArrow() {
  var arrow = createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImg);
  arrow.x = 360;
  arrow.y = bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrow_group.add(arrow);
}

function redBalloon() {
  var red = createSprite(0, Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImg);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  red_group.add(red);
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImg);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blue_group.add(blue);
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0, Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImg);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  green_group.add(green);
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImg);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  pink_group.add(pink);
}