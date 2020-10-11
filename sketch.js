
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var ground;
var canpart1, canpart2, canpart3;
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	canpart1 = new Can(600, 470, 200, 20);
	canpart2 = new Can(500, 430, 20, 100);
	canpart3 = new Can(700, 430, 20, 100);
	paperObject = new Paper(200,440,20);
	ground = new Ground(400, 500, 800, 50);
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);


	//canpart2 = new Can
	//canpart3 =  new Can
  paperObject.display();
  ground.display();
  canpart1.display();
  canpart2.display();
  canpart3.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x: 40.5, y: -60.5});
	}
}

