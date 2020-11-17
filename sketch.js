
var monkey , monkey_running
var banana ,bananaImage, stone, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400)
   monkey=createSprite(40,310,20,20)
   monkey.addAnimation("abc",monkey_running)
   monkey.scale=0.1
  
  
   ground=createSprite(0,350,1000,20);
  
 FoodGroup=createGroup() 
 obstacleGroup=createGroup() 
   
  score=0;
}

function draw() {
 background('white')
  fill('black')
  stroke('black')
  textSize(25)
  score=Math.ceil(frameCount/frameRate())
  text("Survival Time  "+  score,100,50)
    
  
   ground.velocityX=-12
  if(ground.x<0){
   ground.x=ground.width/2
   }
  
  if(keyDown("space")&&monkey.collide(ground)) {
    monkey.velocityY=-15
  }
    monkey.velocityY=monkey.velocityY+0.8
    monkey.collide(ground)
  
if(obstacleGroup.isTouching(monkey)) {
  ground.velocityX=0;
  monkey.velocityY=0;
  obstacleGroup.setVelocityXEach(0);
  FoodGroup.setVelocityXEach(0);
  //stone.setLifetimeEach(-1) 
} 
  
  Banana()
  S()
  
  drawSprites()
  
}

function Banana(){
  if(frameCount%80===0){
   banana=createSprite(300,100,20,20);
   banana.addImage("a",bananaImage)
   banana.scale=0.1  ;       
  var rand=Math.round(random(160,200))
   banana.y=rand;
   banana.velocityX=-4;
   banana.lifetime=300;
  FoodGroup.add(banana)  ;
}
}

function S(){
  if(frameCount%400===0){
  stone=createSprite(400,315,20,20)
  stone.addImage('b',obstacleImage)
  stone.scale=0.1
  stone.velocityX=-4
  stone.lifetime=300
 
obstacleGroup.add(stone)
}
}


