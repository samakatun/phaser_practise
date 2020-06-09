function preload() {
  this.load.image('codey', 'https://s3.amazonaws.com/codecademy-content/courses/learn-phaser/codey.png');
  this.load.image('platform', 'C:/Users/Student/Documents/p5_projects/fyzix_project/phaser_assets/floor.png');
}

function create() {
  gameState.player = this.physics.add.sprite(225, 300, 'codey');
  //Create the ground
  let platforms = this.physics.add.staticGroup();
  platforms.create(250, 400, 'platform');
  gameState.player.setCollideWorldBounds(true);
  this.physics.add.collider(gameState.player, platforms);

  gameState.cursors = this.input.keyboard.createCursorKeys();

}

function update() {
  //Control sprite
  if (gameState.cursors.left.isDown) {
  gameState.player.setVelocityX(-160);
  }
  else if (gameState.cursors.right.isDown) {
    gameState.player.setVelocityX(160);
  } else {
    gameState.player.setVelocityX(0);
  }
}


let config = {
  type: Phaser.AUTO,
  width: 600,
  height: 400,
  backgroundColor: 0xdda0dd,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 200},
      enableBody: true,
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

let game = new Phaser.Game(config);
let gameState = {};
