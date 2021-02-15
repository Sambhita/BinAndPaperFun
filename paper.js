class Paper{
        constructor(x, y, radius) {
            var options = {
                'isStatic':false,
                'restitution':0.3,
                'friction':0.1,
                'density':1.7,
            }
            this.body = Bodies.circle(250, 540, 20, options);
            this.radius = radius;
            this.image = loadImage("Images/paper 1.png");
            
            World.add(world, this.body);
          }
          display(){
            var angle = this.body.angle;
            translate(this.body.position.x, this.body.position.y);
            imageMode(RADIUS);
            rotate(angle)
            fill("white");
            image(this.image,0,0, 33,33);
          }
}