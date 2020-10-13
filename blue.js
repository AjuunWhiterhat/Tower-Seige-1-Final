class Blue{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.7,
            density:0.6,
            friction:1,
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        push();
        rectMode(CENTER);
        strokeWeight(2);
        fill(134, 205, 233);
        translate(pos.x,pos.y);
        rect(0,0,this.width,this.height);
        pop();
    }
}