


var Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine, world;
var ground;
var pins = []

function preload() {
  
  
}

function setup() {
  canvas = createCanvas(500, 600);
  engine = Engine.create()
  world = engine.world;
  
 
 ground = new Ground(width/2, height, width, 10)

 for(var p = 45; p <= width; p += 50){
  pins.push(new Pin(p, 75))
 }

 for(var p = 19; p <= width; p += 50){
  pins.push(new Pin(p, 135))
 }

 for(var p = 45; p <= width; p += 50){
  pins.push(new Pin(p, 195))
 }

 for(var p = 19; p <= width; p += 50){
  pins.push(new Pin(p, 255))
 }

 
  
}

function draw() {
  background("#ed841a");
 // image();


  Engine.update(engine);
  ground.display();

  for(var i = 0; i < pins.length; i ++){
    pins[i].display();
  }

  
 
}

