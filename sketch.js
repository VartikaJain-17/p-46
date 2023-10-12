var runner,runner_animation;
var bg1;
var obstacle;
var coin;

function preload(){
  runner_animation = loadAnimation("Runner1.png","Runner2.png","Runner3.png","Runner4.png","Runner5.png")
 bg1 = loadImage("bg1.gif")
 obstacle = loadImage("obstacle.png")
 coin = loadImage("coin.png")
}
function setup() 
{
  createCanvas(windowWidth , windowHeight);
  runner = createSprite(windowWidth - 1400 , windowHeight - 250 , 50 , 50)
  runner.addAnimation("running" , runner_animation)
  runner.scale = 0.8

  ground = createSprite(windowWidth -800, windowHeight-20 , windowWidth , 10)
}

function draw() 
{
background(51);

if(keyDown("UP_ARROW")){
  runner.velocityY = -8
  console.log(runner.y)
}
runner.velocityY = runner.velocityY+0.7;
runner.collide(ground)
spawnObstacles()
spawnCoins()
  drawSprites()
  
}
function spawnObstacles(){
 if(frameCount % 100 === 0) {
 var obstacle1 = createSprite(1500,700,50,50);
 obstacle1.velocityX = -6
 obstacle1.addImage(obstacle)
 obstacle1.scale = 0.5
 }
}

function spawnCoins(){
  if(frameCount % 170 === 0) {
  var coin1 = createSprite(1500,700,50,50);
  coin1.velocityX = -6
  coin1.addImage(coin)
  coin1.scale = 0.5
  }
 }

