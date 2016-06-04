var game = new Phaser.Game(400, 500);
var platforms;

var mainState = {
  preload: function() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('brick', 'assets/brick.png')
  },

  create: function() {
    game.add.sprite(0, 0, 'sky');

    platforms = game.add.group();
    platforms.enableBody = true;

    var ground = platforms.create(0, game.world.height - 30, 'ground');
    ground.body.immovable = true;

    var ledge = platforms.create(-200, 50, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(-250, 300, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(250, 200, 'ground');
    ledge.body.immovable = true;
  },

  update: function() {

  }
};

game.state.add('main', mainState);
game.state.start('main');