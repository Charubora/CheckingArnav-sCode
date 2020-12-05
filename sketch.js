const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball,box1,box2,box3,box4,box5,pig1,pig2,log1,log2,log3,log4;

function setup(){

    var canvas = createCanvas(1400,600);
    engine = Engine.create();   
    world = engine.world;

    /*var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);*/
    log1 = new Log(1130,500,20,330,PI/2);

    box1= new Box(1000,570,70,70);

    box2 = new Box(1260,570,70,70);

    pig1 = new Pig(1130,570);

    log2 = new Log(1130,400,20,330,PI/2);

    box3= new Box(1000,450,70,70);

    box4 = new Box(1260,450,70,70);

    box5 = new Box(1130,370,70,70);

    pig2 = new Pig(1130,450);

    ground = new Ground(700,590,1400,30);

   log3 = new Log(1080,350,20,160,PI/7);

   log4 = new Log(1190,350,20,160,-PI/7);

    /*var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);*/
}

function draw(){
    background(0);
    Engine.update(engine);
    //rectMode(CENTER);
    //rect(ground.position.x,ground.position.y,400,20);

    /*ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);*/
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    
   box3.display();
    box4.display();
    box5.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
}