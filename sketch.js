const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var bridge;
var jointPoint;
var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

}

function draw() {
  background(51);
  bridge = new Bridge(base,bridge);
  Matter.Composite.add(bridge.body,jointPoint);
  jointPoint = new Link(bridge,jointPoint);

  for (var i=0;i<=8;i++){
       var x=random(width/2-200,width/2+300);
       var y=(-10,140);
       Stone.push(stones);
  }
  Engine.update(engine);

}
