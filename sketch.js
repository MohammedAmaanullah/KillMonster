const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint  = Matter.Constarint;

var engine, world;
var superhero;
var rope;
var skyImage

function preload(){
  skyImage = loadImage("sky.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  
  superhero = new SuperHero(500,300,100,100);
  monster = new Monster(1000,400,300,300);
  ground = new Ground(1500,750,5000,30);
  //fly = new Fly(superhero.body,{x:200, y:100});
}

function draw() {
  background(skyImage);
  Engine.update(engine);
  superhero.display();
  monster.display();
  ground.display();
  //fly.display()
}

