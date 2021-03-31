var h,hI,p,pI,g;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){

	hI = loadImage("helicopter.png");
	pI = loadImage("package.png");

}

function setup(){

	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	p = createSprite(width/2,200,10,10);
	p.addImage(pI);
	p.scale = 0.2;

	h = createSprite(width/2,200,10,10);
	h.addImage(hI);
	h.scale = 0.8;

	packageBody = Bodies.rectangle(width/2 , 200 , 5 ,5,{restitution:0.6, isStatic:true});
	World.add(world, packageBody);

	redZone1 = new RedZone(width/2,height-50,200,20);
	redZone2 = new RedZone(width/2-110,610,20,100);
	redZone3 = new RedZone(width/2+110,610,20,100);
	
}

function draw(){
	
	background(0);
	Engine.update(engine);
	

	redZone1.display();
	redZone2.display();
	redZone3.display();

	p.x= packageBody.position.x;
	p.y= packageBody.position.y;
	  
	keyPressed();

	drawSprites();

}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   
	Matter.Body.setStatic(packageBody, false);
   	   
	}
}   