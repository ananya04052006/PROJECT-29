//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

function setup() {
  //background(0);
  createCanvas(800,400);
  //engine = Engine.create();
  //world = engine.world;
  //createSprite(400, 200, 50, 50);
  //base = new Ground(400, 200, 800, 20);
  //box1 = new Box(330, 235, 30, 40);
  //box2 = new Box(360, 235, 30, 40);
  //box3 = new Box(390, 235, 30, 40);
  //box4 = new Box(420, 235, 30, 40);
  //box5 = new Box(450, 235, 30, 40);
  //box6 = new Box(360, 195, 30, 40);
  //box7 = new Box(390, 195, 30, 40);
  //box1 = new Box(420, 195, 50, 50);
  //box8 = new Box(390, 155, 30, 40);
  // polygon = Bodies.circle(50, 200, 20);
  //World.add(world, polygon);
  //slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw() {
  background(0);
  //base.display();
  //box1.display();
  //box2.display();
  //box3.display();
  //box4.display();
  //box5.display();
  //box6.display();
  //box7.display();
  //box8.display();  
  drawSprites();
}

function mouseDragged(){
  if(gameState !== "launched") {
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
  slingshot.fly();
}