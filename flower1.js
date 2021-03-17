class Flowers1{
    constructor(x,y){

        var options = {

            density : 10,
            friction : 0.001

        }
      
        this.flower = Bodies.circle(x,y,25,options)
        this.radius = 5;
        this.image = loadImage("pics/rough/1f.png");
        //Matter.Body.setVelocity(this.flower, 1)
        World.add(world, this.flower);
    }

   

    display(){
       // fill("blue")
     // ellipseMode(CENTER);
      // ellipse(this.flower.position.x,this.flower.position.y,this.radius,this.radius);
       imageMode(CENTER)
       image(this.image,this.flower.position.x,this.flower.position.y,100,100)
    }
}