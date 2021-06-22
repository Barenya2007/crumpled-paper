
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);

    engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	ground = new Ground(410,350,1200,20);

	bin= new Dustbin(580,335,130,10);
	bin2= new Dustbin(520,285,10,90);
	bin3= new Dustbin(640,285,10,90);

	paper= new Paper(200,335,15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  bin.display();
  bin2.display();
  bin3.display();

  paper.display();
  

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
        Matter.Body.applyForce(paper.body, paper.body.position,{x:12,y:-85});
	}
	
}



