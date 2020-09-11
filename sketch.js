var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,objective_1,objective_2,objective_3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	objective_1 = createSprite (400,670,200,20);
	objective_2 = createSprite(300,630,20,90);
	objective_3 = createSprite(500,630,20,90);

	//I don't know why this isn't showing. 
	objective_1 = Bodies.rectangle(width/2,690,200,20,{isStatic:true});
	World.add(world,objective_1);
	objective_1.shapeColor = "red"

	objective_2 = Bodies.rectangle(300,640,20,100,{isStatic:true})
	World.add(world,objective_2);
	objective_2.shapeColor = "red"

	objective_3 = Bodies.rectangle(500,640,20,100,{isStatic:true})
	objective_3.shapeColor = "red"
	World.add(world,objective_3);



	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyDown("down")) {
	Matter.Body.setStatic(packageBody,false);
	
    
  }
}



