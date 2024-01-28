var canvas;
var backgroundImage, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2;
var cars = [];
var life_img, coin_img, obstacle_img, fuel_img
var coins, fuels, obstacles
var obstacle2Image, obstacle1Image, blast_img


function preload() {
// load all the images we need into the variables
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();

  game.start();
  
}

function draw() {
  // add white background to the canvas
  background('#474667');
  if (playerCount ==2) {
    gameState = 1
    game.update(gameState);
  }
  if (gameState == 1) {
    game.play();
  }

}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
