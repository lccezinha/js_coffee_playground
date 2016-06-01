var game = new Phaser.Game(400, 450);
var bird;

var mainState = {
  preload: function() {
    game.load.image('bird', '../assets/bird.png');
  },

  create: function() {
    game.stage.backgroundColor = '#71c5cf';
    game.physics.startSystem(Phaser.Physics.ARCADE);

    bird = game.add.sprite(100, 245, 'bird');

    game.physics.arcade.enable(bird);

    bird.body.gravity.y = 1000;

    var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(jump, this);
  },

  update: function() {
    if (bird.y < 0 || bird.y > 490)
      restartGame();
  }
};

function jump() {
  bird.body.gravity.y = -350;
};

function restartGame() {
  game.state.start('main');
};

game.state.add('main', mainState);
game.state.start('main');