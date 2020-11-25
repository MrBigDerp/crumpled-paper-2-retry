
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(400,680,800,20)

	side1= new Box(500,660,150,20)
	side2 = new Box(430,620,20,100)
	side3 = new Box(580,620,20,100)
	paper = new Paper(100,650,70)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 ground.display();
 side1.display();
 paper.display();
}
function keyPressed() 
{ if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(paper.body, paper.body.position, {x: 400, y:-400}); } }


