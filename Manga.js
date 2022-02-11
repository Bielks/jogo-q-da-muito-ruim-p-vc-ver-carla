class Manga {
    constructor(x, y){
        var options = {
            'density': 0.5,
            'friction': 0.5,
            'restitution': 0.1
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage('Manga.png');
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;

        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(image, 0, 0, this.width, this.height);
        pop();
    }
}