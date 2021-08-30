class Base {
    constructor(x,y,w,h){
      base_opt={
      isStatic=true
  };
  this.body.x=x;
  this.body.y=y;
  this.body=Bodies.rectangle(x, y, this.width, this.height,base_opt);
  World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("yellow");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}