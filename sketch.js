const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var polygonImg
var bird, slingShot;

function preload() {
  polygonImg=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(600,height,1200,20);
    ground2 = new Ground(590,350,300,20);
    ground3 = new Ground(900,200,300,20)

    box1 = new Box(500,295,30,40);
    box2 = new Box(530,295,30,40);
    box3 = new Box(560,295,30,40);
    box4 = new Box(590,295,30,40);
    box5 = new Box(620,295,30,40);
    box6 = new Box(650,295,30,40);  
    box7 = new Box(680,295,30,40);

    box8 = new Box(530,255,30,40);
    box9 = new Box(560,255,30,40);
    box10 = new Box(590,255,30,40);
    box11 = new Box(620,255,30,40);   
    box12 = new Box(650,255,30,40);

    box13 = new Box(560,215,30,40);
    box14 = new Box(590,215,30,40)
    box15 = new Box(620,215,30,40);

    box16 = new Box(590,175,30,40)

    box17 = new Box(840,185,30,40)
    box18 = new Box(870,185,30,40)
    box19 = new Box(900,185,30,40)
    box20 = new Box(930,185,30,40)
    box21 = new Box(960,185,30,40)

    box22 = new Box(870,145,30,40);
    box23 = new Box(900,145,30,40);
    box24 = new Box(930,145,30,40);

    box25 = new Box(900,105,30,40)

   polygon = Bodies.circle(200,150,20);
   World.add(world,polygon)
   
    slingshot = new SlingShot(this.polygon,{x:200, y:150});
}

function draw(){
    background(0)
    Engine.update(engine);
    strokeWeight(4);
    ground1.display();
    ground2.display();
    ground3.display();
    fill("blue");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill ("pink")
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill ("yellow")
    box13.display();
    box14.display();
    box15.display();
    fill ("purple")
    box16.display();
    fill("blue")
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill("yellow")
    box22.display();
    box23.display();
    box24.display();
    fill("pink")
    box25.display();
    
    imageMode(CENTER)
   image(polygonImg,polygon.position.x,polygon.position.y,40,40)
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32){
      slingshot.attach(this.polygon);
    }
}