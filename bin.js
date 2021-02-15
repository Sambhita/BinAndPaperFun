class Bin{
    constructor(x, y, width, height) {
        var options = {
            'isStatic':true,
            'restitution':0.3,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("Images/dustbingreen.png");
        
        World.add(world, this.body);
      }
      display(){
        imageMode(CENTER);
        fill("white");
        image(this.image,this.body.position.x, this.body.position.y-75, this.width, 150);
      }
}