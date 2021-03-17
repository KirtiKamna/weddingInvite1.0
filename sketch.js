const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var imgSides;
var imgMiddle;
var sideL;
var sidesR;
var middle;

var kiss;
var kissAnimation;
var frame;
var frameImg;

var basket1 = [];
var basket2 = [];
var basket3 = [];
var basket4 = [];
var basket5 = [];


var ground;


function preload(){

    imgSides = loadImage("pics/2.jpg");
    imgMiddle = loadImage("pics/3.jpg");

    kissAnimation =loadAnimation("pics/kiss/1f.png","pics/kiss/2f.png","pics/kiss/3f.png",
    "pics/kiss/4f.png","pics/kiss/5f.png","pics/kiss/6f.png","pics/kiss/7f.png","pics/kiss/8f.png",
    "pics/kiss/9f.png",);

    frameImg = loadImage("pics/kiss/b1.png");


}
function setup(){
    createCanvas(displayWidth -100,displayHeight-120);

    engine = Engine.create();
    world = engine.world;
    sideL = createSprite(150,372,50,50);
    sideL.addImage(imgSides);
    sideL.scale= 1.6;

    sideR = createSprite(1200,372,50,50);
    sideR.addImage(imgSides);
    sideR.scale= 1.6

    middle = createSprite(700,372,50,50);
    middle.addImage(imgMiddle);
    middle.scale = 1.0;


    kiss= createSprite(710,550,100,100);
    kiss.addAnimation("chauu",kissAnimation)
    kiss.scale= 0.4

    frame = createSprite(710,550,100,100);
    frame.addImage(frameImg)
    frame.scale = 0.8;

    if(frameCount % 1000 === 0){

        for(var i=0; i<75; i++){
            basket1.push(new Flowers1(random(5,1530), random(5,855)));
        }

    }

    
    if(frameCount % 1500 === 0){

        for(var i=0; i<75; i++){
            basket2.push(new Flowers2(random(5,1530), random(5,855)));
        }

    }

    if(frameCount % 300 === 0){

        for(var i=0; i<75; i++){
            basket3.push(new Flowers3(random(5,1530), random(5,855)));
        }

    }

    if(frameCount % 600 === 0){

        for(var i=0; i<75; i++){
            basket4.push(new Flowers4(random(5,1530), random(5,855)));
        }

    }


    if(frameCount % 800 === 0){

        for(var i=0; i<50; i++){
            basket5.push(new Flowers5(random(5,1530), random(5,855)));
        }

    }

ground  = Bodies.rectangle(750,750,1530,15,{isStatic:true})
World.add(world,ground)
}
function draw(){


    drawSprites();

    fill("yellow")
    textFont('papyrus')
    textSize(30)
    text("#RahulKiKamna",590,250)
    fill("cyan")
    textFont('papyrus')
    textSize(36)
    stroke("red");
    strokeWeight(2)
    text("Save  the  date",590,300)

    fill("yellow")
    textFont('papyrus')
    textSize(40)
   noStroke();
    text("24.04.2021",610,355)





    Engine.update(engine);


  

    rectMode(CENTER);

  // rect(ground.position.x,ground.position.y,1530,5) 
  for(var i = 0; i<75; i++){
    basket2[i].display();
    
    
  }
  
  
  for(var i = 0; i<75; i++){
    basket1[i].display();
    
    
  }
  
  
  for(var i = 0; i<75; i++){
    basket3[i].display();
    
    
  }
  
  
  for(var i = 0; i<75; i++){
    basket4[i].display();
    
    
  }
  
  
  for(var i = 0; i<50; i++){
    basket5[i].display();
    
    
  }
}