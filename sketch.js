var bg,bgImg;
var shooter,shooterImg
var shootingImg;
var zombie,zombieImg;
var zombieGroup;

function preload(){
  bgImg= loadImage("assets/bg.jpeg")
  shooterImg= loadImage("assets/shooter_2.png")
  shootingImg= loadImage("assets/shooter_3.png")
  zombieImg= loadImage("assets/zombie.png")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  //adding the background and its image
  bg=createSprite(displayWidth/2,displayHeight/2)
  bg.addImage(bgImg)
  shooter=createSprite(70,470,50,50)
  shooter.scale=0.3
  shooter.addImage(shooterImg)
  //creating zombieGroup
  zombieGroup=new Group()
  shooter.debug=true;
  shooter.setCollider("rectangle",0,0,300,300)
}
function draw(){
  background("black")
  if(keyWentDown("space")){
    shooter.addImage(shootingImg)
  }
  if(keyWentUp("space")){
    shooter.addImage(shooterImg)
  }
  if(keyDown("left")&& shooter.x>25){
    shooter.x -= 5

  }
  if(keyDown("right")){
    shooter.x += 5
  }
  if(keyDown("up")&& shooter.y>70){
    shooter.y -= 5
  }
  if(keyDown("down")&& shooter.y<500){
    shooter.y += 5
  }

  enemy();
  //destroy zombie when player touches it
  if(zombieGroup.isTouching(shooter)){
    for(var i=0;i<zombieGroup.length;i++){
      if(zombieGroup[i].isTouching(shooter)){
        zombieGroup[i].destroy()
      }
    }
  }
  
  drawSprites()
}

function enemy(){
  if(frameCount%50==0){
    zombie= createSprite(random(500,1100),random(100,500),50,50)
    zombie.addImage(zombieImg)
    zombie.scale=0.15
    zombie.velocityX= -3;
    zombie.lifetime=width/3;
    zombieGroup.add(zombie)
    zombie.debug=true;
    zombie.setCollider("rectangle",0,0,400,400)
  }
  
}