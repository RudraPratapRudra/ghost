var tower,towerimg;
var door,doorimg,doorgro;
var climber,climberimg,climbergro;
var ghost,ghostimg;
var inblock,inblockgro;
var gameState="play";
var spookysound;

function preload(){
towerimg=loadImage("tower.png")
                   
doorimg=loadImage("door.png")
doorgro= new Group();
 
climberimg=loadImage("climber.png")  
climbergro= new Group();

inblockgro= new Group();
  
ghostimg=loadImage("ghost-standing.png")  

spookysound=loadSound("spooky.wav")  
}

function setup(){
createCanvas(600,600)
tower=createSprite(300,200,10,100)
tower.addImage("tower",towerimg)
tower.velocityY=2;  


spookysound.loop();  
 
  
ghost=createSprite(300,300,10,10)
ghost.addImage("ghost",ghostimg)  
ghost.scale=0.3  
}

function draw(){
 background(0)
  if (gameState==="play"){
    
  
 if(tower.y>400){
    tower.y=300;}
if(keyDown("space")){
ghost.velocityY=-3
  }
ghost.velocityY=ghost.velocityY+0.8
if(keyDown("left")){
   ghost.x=ghost.x-3
   } 
  if(keyDown("right")){
   ghost.x=ghost.x+3
   } 
  if(climbergro.isTouching(ghost)){
     ghost.velocityY=0
     }
  if(inblockgro.isTouching(ghost)||ghost.y>400){
     ghost.destroy();
    gameState="end"
     }
  
  spawndoor();
drawSprites();  
}
if(gameState==="end"){
  textSize(50)
  stroke("yellow")
  fill("red")
 text("Game Over",180,300) 
  
}
}
function spawndoor(){
   if(frameCount%240===0){
 
door=createSprite(180,-50,10,10)  
door.addImage("door",doorimg)
door.x=Math.round(random(180,400)) 
console.log(door.x)    
door.velocityY=2
door.lifetime=330;
doorgro.add(door)
     
ghost.depth=door.depth
ghost.depth=ghost.depth+1 
     
climber=createSprite(180,10,10,10) 
climber.addImage("climber",climberimg)
climber.x=door.x 
climber.velocityY=2
climber.lifetime=300
climbergro.add(climber) 
     
inblock=createSprite(300,15,10,10) 
inblock.width=climber.width 
inblock.height=2 
inblock.x=door.x
inblock.velocityY=2
inblockgro.add(inblock)
inblock.debug=true     
}

  }
  