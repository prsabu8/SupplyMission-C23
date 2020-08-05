var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1, box2, box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 199, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	
	box1 = new Box(height-410, width/1.31, 20, 100);
	box2 = new Box(height-190, width/1.31, 20, 100);
	box3 = new Box(width/2, height-50, 200, 20);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  drawSprites();

  box1.display();
  box2.display();
  box3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
  }
}

