var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1000,1000);
	var ball_options={
		restitution:1,
		density:1.2,
		friction:0,
		isStatic:false}
	
	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
	ball=Bodies.circle(500,500,20, ball_options)
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display()
  groundObj=new Ground(width/2,670,width,20)
  lefts=new Ground(1100,600,20,120)
  rights=new Ground(1200,600,20,120)
  drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05} )
	}
}

