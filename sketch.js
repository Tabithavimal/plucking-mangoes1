
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
boy1=new Boy(150,620,40,40)

tree1=new Tree(600,600,100,100)


ground=new Ground(width/2,670,width,20)
	Engine.run(engine);
	

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
boy1.display();
ground.display();
tree1.dispaly();
}



