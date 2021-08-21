
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 680);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here

ground= new Ground (width/2,670,width,20)

leftSide = new Ground(770,610,20,200);
rightSide = new Ground(550,610,20,100);

var ball_option = {
	isStatic : false,
    restitution : 0.3,
	friction : 0,
   
  }
  
  ball = Bodies.circle(100,200,20,ball_option);
  World.add(world,ball)

	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);

}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x, ball.position.y, 20)

ground.display()
leftSide.display()
rightSide.display()

Engine.update(engine);
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		friction : 0
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.04,y:-0.07})

    }
}

