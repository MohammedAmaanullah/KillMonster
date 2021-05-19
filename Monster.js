class Monster{
    constructor(x,y,width,height){
        var options = {
            resitution :0.8,
            density : 1.0,
            frictionAir : 0.2
        }
        this.monster = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.monster);
    }
    display(){
        var pos = this.monster.position;
        var angle = this.monster.angle;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}