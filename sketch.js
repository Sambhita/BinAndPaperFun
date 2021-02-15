const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
var engine,world;
//var body;

var paperImage,paper;
var binImage;

function preload(){

	paperImage = loadImage("Images/paper.png");
	binImage = loadImage("Images/dustbingreen.png");

}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);
	paper = new Paper();

	lineL = new Bin(550,640,20,100);
	lineR = new Bin(670,640,20,100);
	lineB = new Bin(610,680,100,20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  Engine.update(engine);

  ground.display();
  paper.display();

  //lineM.display();
  //lineL.display();
  //lineR.display();
  lineB.display();

  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}