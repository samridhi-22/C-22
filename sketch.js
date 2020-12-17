const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var options ={
        isStatic: true
    }

    box = Bodies.rectangle(200,380,400,20,options);
    World.add(world,box);
    var option1={
        restitution:0.5
    }
ball=Bodies.circle(200,200,20,option1);
   World.add(world,ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(box.position.x,box.position.y,400,20);
    ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
    
}