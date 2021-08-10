// Variable Declaration
var canvas, backgroundImage;
var background1;
var road1,road2,road3,road4;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var bike1,bike2,bike3,bike4,bikes;
var form, player, game;

// Game Over Variables
var gameo,gameoimg;

// bikes Images
var bimg1,bimg2,bimg3,bimg4;


//Loading Images
function preload(){
  background1= loadImage("wp.jpg");
  bimg1= loadImage("img/b1.png");
  bimg2= loadImage("img/b2.jpg");
  bimg3= loadImage("img/b3.png");
  bimg4= loadImage("img/b4.png");
  gameoimg= loadImage("img/gameover.png")
}

// Function Setup
function setup(){
 canvas = createCanvas(displayWidth-45,displayHeight-147);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

// Function Draw
function draw(){
  //Background
  background(background1);

  //Player Count To 4
  if(playerCount === 4){
    game.update(1);
  }

  // Game State To 1
  if(gameState === 1){
    clear();
    game.play();
 }

 // Gamestate To End
 //if (gameState === 2){
 //  background1.hide();
  // game.end();
 //  game.update(1);


}
