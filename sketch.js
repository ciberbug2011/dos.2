var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var ball;


var divisionHeight=300;
var score =0;
var count = 0;
var gameState = "start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //crea los objetos para dividir
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 80; k <=120; k = k + 120) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 160; k <=200; k = k + 200) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 240; k <=280; k = k + 280) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 320; k <=360; k = k + 360) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 400; k <=440; k = k + 440) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 480; k <=520; k = k + 520) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 560; k <=600; k = k + 600) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 640; k <=680; k = k + 680) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 720; k <=760; k = k + 760) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 800; k <=840; k = k + 840) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //crea la primera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crea la segunda fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //crea la tercera fila de objetos plinko
  for (var j = 25; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }

  //crea la cuarta fila de objetos plinko
  for (var j = 0; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //crea los objetos partícula
  
    for (var k = 0; k <=width; k = k + 80){
      divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }


    for (var j = 75; j <=width; j=j+50)
    {

      plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width; j=j+50)
    {

      plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50)
    {

      plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width; j=j+50)
    {

      plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
  textSize(35)
  text("pinero ganado : "+score,20,40);
  fill("white");
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" -100 ", 320, 550);
  text(" -100 ", 400, 550);
  text(" -100 ", 480, 550);
  text(" 500 ", 560, 550);
  text(" 500 ", 640, 550);
  text(" 500 ", 720, 550);


  Engine.update(engine);
  ground.display();

  if (gameState == "end") {
    
    textSide(75);
    fill("gold")
    text("terminaste en banca rota y tu esposa te dejo", 150,200);
  }


  
  //muestra los plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  if(ball!=null)
  {
    ball.display();
      
      if (ball.body.position.y>760)
      {
            if (ball.body.position.x < 300)
            {
              score=score+500;
              ball=null;
              if (count>= 5) gameStatw ="end";
            }


             else if (ball.body.position.x < 600 && ball.body.position.x > 301)
           {
                  score = score - 100;
                  ball=null
                  if (count>= 5) gameStatw ="end";
           }
           else if (ball.body.position.x < 900 && ball.body.position.x > 601)
           {
             
            score = score + 500;
            ball=null
            if (count>= 5) gameStatw ="end";
           }
      }
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }
  for (var j =0; j <particles.length; j++){
    particles[j].display();
  }

  //muestra las divisiones
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //muestra las partículas 
  for (var k = 0; k < divisions.length; k++) {

    divisions[k].display();
  }
}
function mousePressed()
  {
    if(gameState!=="end")
    {
      count++;
      ball=new Ball(mouseX, 10, 10, 10);
    }
  }
