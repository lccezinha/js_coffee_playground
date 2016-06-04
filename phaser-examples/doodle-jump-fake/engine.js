var game = new Phaser.Game(400, 500);

var mainState = {
  preload: function() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
  },

  create: function() {
    game.add.sprite(0, 0, 'sky');
    game.add.sprite(0, game.world.height - 30, 'ground');
  },

  update: function() {

  }
};

game.state.add('main', mainState);
game.state.start('main');