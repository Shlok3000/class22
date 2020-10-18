const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  var ground_op = {
    isStatic: true
  }

  var ball_op = {
    restitution: 1.0
  }

  ground = Bodies.rectangle(200,390,100,100,ground_op);
  World.add(world,ground);

  ball = Bodies.circle(200,100,20,ball_op);
  World.add(world,ball);
}

function draw() {
  background(0); 
  Engine.update(engine); 
  rectMode(CENTER);
  fill("brown");
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}