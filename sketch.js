const engine = Matter.Engine;
const worldc = Matter.World;
const bodies = Matter.Bodies;

var engine1,world;

var box1,box2;

var ground1,pig1,pig2,log1,box3,box4,box5,log2,bird1;

function setup() {
  createCanvas(1200,400);

  engine1 = engine.create();
  world = engine1.world;
  
 ground1 = new ground(600,380,1200,20);

box2 = new box(920,320,70,70);
  box1 = new box(700,320,70,70);

  pig1 = new pig(810,350);

  log1 = new log(810,260,300,15,PI);

  box3 = new box(700,240,70,70);
  box4 = new box(920,240,70,70);

  pig2 = new pig(810,220);

  log2 = new log(810,200,300,15,PI);

  bird1 = new bird(100,100);
  
}

function draw() {
  background(255,0,0);

  engine.update(engine1);
  

 box1.display();
 box2.display();
 ground1.display();
 pig1.display();
log1.display();
box3.display();
box4.display();
pig2.display();
log2.display();
bird1.display();
}