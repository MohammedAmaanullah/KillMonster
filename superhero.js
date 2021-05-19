class SuperHero{
    constructor(x,y,width,height){
        var options = {
            restitution : 0.8,
            density : 1.0,
            frictionAir : 0.09
        }
        this.superhero = Bodies.rectangle(x,y,width,height,options);
        //this.image = loadImage("superheroimage.png")
        this.width = width;
        this.height = height;
        World.add(world, this.superhero);
    }
    display(){
        var pos = this.superhero.position;
        var angle = this.superhero.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}