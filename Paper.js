class Paper{
constructor(x,y,r){
var option={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2
}
this.body=Bodies.circle(x,y,5,options);
World.add(world,this.body);

ImageMode(CENTER);
this.Image=loadImage(Sprite/paper.png);
}
display(){
    var pos =this.body.position;
    rectMode(CENTER);;
    push();
    translate(pos.x, pos.y);
    fill("white");
    ellipse(0,0,this.r, this.r)
    pop();
}

    }