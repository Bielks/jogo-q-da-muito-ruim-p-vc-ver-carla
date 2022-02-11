class Carinha{
   constructor(x, y){
       var options = {
           density: 20,
           friction: 30
       }
       this.body = Bodies.rectangle(x, y, 30, 70, options);
       this.width = 30;
       this.height = 70;
       this.image = loadImage('carinha.png');
       World.add(world, this.body);
   }
   display(){
       var angle = this.body.angle;
       push();
       translate(this.body.position.x, this.body.position.y);
       rotate(angle);
       imageMode(CENTER);
       image(image, 0, 0, this.width, this.height);

   }
}