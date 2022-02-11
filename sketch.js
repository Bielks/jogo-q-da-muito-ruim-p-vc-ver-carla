const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;


var manga, mangaSprite, mangaImg;
var carinha, carinhaSprite, carinhaImg, carinhoPoker, carinhaFu;
var trollFace, trollFaceImg, trollFaceSadImg;

function preload(){
  trollFaceImg = loadImage('troll face.png');
  trollFaceSadImg = loadImage('ok ;-;.png');

  mangaImg = loadImage('Manga.png');

  
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;

  manga = new Manga(400, 200);
  //carinha = new Carinha(700, 350);
  ground = new Ground(400, 400, 200000, 30);

  trollFace = createSprite(100, 310, 40, 70);
  trollFace.addImage('trollface', trollFaceImg);
  trollFace.scale = 0.2

  //mangaSprite = createSprite();
  //mangaSprite.addImage('manga', mangaImg);


}

function draw() {
  background('white');
  manga.display();
  //carinha.display();
  ground.display();

  //mangaSprite.x = manga.position.x;
  //mangaSprite.y = manga.position.y;
  
  drawSprites();  
  
}