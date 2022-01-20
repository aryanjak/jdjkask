const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;
  ground = new Gnd(400, 690, 800, 10);
  roof = new Gnd(400, 150, 400, 20);
  ball1 = new Ball(200, 450, 50, 50);
  ball2 = new Ball(260, 450, 50, 50);
  ball3 = new Ball(320, 450, 50, 50);
  ball4 = new Ball(380, 450, 50, 50);
  ball5 = new Ball(440, 450, 50, 50);
  rope1 = new Rope(roof.body, ball1.body);
  rope2 = new Rope(roof.body, ball2.body);
  rope3 = new Rope(roof.body, ball3.body);
  rope4 = new Rope(roof.body, ball4.body);
  rope5 = new Rope(roof.body, ball5.body);
  //Create the Bodies Here.

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  roof.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}
