var bg, bgImg;
var bird, birdImg;
var invisibleground;
var score = 0;
var pipe1,pipe2;
var gameState=1;
var gameOverImg;
var endgame;
function preload(){
  bgImg = loadImage("bg.png");
  birdImg = loadImage("bird.png");
  gameOverImg = loadImage("gameOver.png");
}
function setup(){
  createCanvas(1200,800);
  bg= createSprite(100,400,1200,800);
  bg.addImage(bgImg);
  bg.scale=2.5;
  bg.velocityX=-4;
  bird = new Bird(1100,450,10,10);
  pipe1 = new Pipes(1100,150,100,300);
  pipe2 = new Pipes(1100,650,100,300);
  invisibleground = createSprite(600,800,1200,20)
  invisibleground.shapeColor="black";
}
function draw(){
  background("blue");
  createEdgeSprites();
  fill("black") 
  strokeWeight(5);
  textSize(50)
if(gameState===1){
  if(bg.x<200){
    bg.x=bg.width/2
  }
  pipe1.display();
  pipe2.display();
  bird.display();
 
}
  drawSprites();
  text("Score :"+score,500,250);
  bird.a.collide(invisibleground);
   if(gameState===0){
    bird.end();
    console.log("hello");
    endgame = createSprite(600,400,200,200);
    endgame.addImage(gameOverImg);

  }
}
function reset(){
  if(keyDown==="UP_ARROW"){
    
  }
}