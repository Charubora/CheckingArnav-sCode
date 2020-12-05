class Pig{


constructor(x,y){
     var options={
          restitution : 0.8,
          friction : 0.3,
          density:1
      }
      this.body=Bodies.rectangle(x,y,70,70,options);
      this.width=70;
      this.height=70;
      World.add(world,this.body);

  }   
 display(){
     push();
     translate(this.body.position.x,this.body.position.y);
     rotate(this.body.angle);

   rectMode(CENTER);
   fill("pink");
   rect(0,0,this.width,this.height);
   pop();
     
 }


}





