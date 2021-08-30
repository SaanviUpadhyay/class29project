class Stone{
    constructor(x,y,w,h){
        var stone_options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0,
            isStatic: true
          };
          this.r = 40;
          this.body = Bodies.circle(x, y, this.r, stone_options);
      
        }
        display() {
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            fill("brown");
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
          }
    }

