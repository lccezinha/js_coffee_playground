var game = new Phaser.Game(400, 500);

var cursors, man, ball, scoreLabel;
var score = 0;
var mainState = {
  preload: function() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('man', 'assets/bird.png');
    game.load.image('ball', 'assets/ball.png')
  },

  create: function() {
    score = 0;

    // Criando sprites
    game.add.sprite(0, 0, 'sky');
    game.add.sprite(0, game.world.height - 30, 'ground');
    man = game.add.sprite((game.world.width / 2) - 40, game.world.height - 65, 'man');
    man.scale.setTo(0.7);
    ball = game.add.sprite((game.world.width / 2) - 40, 0, 'ball');

    // Habilitando física
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.enable(man);
    game.physics.arcade.enable(ball);

    ball.body.gravity.y = 500;

    cursors = game.input.keyboard.createCursorKeys();

    // Score
    var labelOptions = { font: "30px Arial", fill: "#ffffff" };
    labelScore = game.add.text(20, 20, 0, labelOptions);
  },

  update: function() {
    game.physics.arcade.overlap(man, ball, handleCollision, null, this);

    if (ball.y > game.world.height) {
      restartGame();
    }

    if (cursors.left.isDown) {
      man.body.velocity.x = -200
    } else if (cursors.right.isDown) {
      man.body.velocity.x = 200;
    };
  }
};

function handleCollision() {
  incrementPoints();
  moveBall();
};

function restartGame() {
  game.state.start('main');
};

function incrementPoints() {
  score += 1;
  labelScore.text = score;
};

function moveBall() {
  ball.body.velocity.x = Math.random() * (-100 + (-100)) + 100;
  ball.body.velocity.y = -500;
};

game.state.add('main', mainState);
game.state.start('main');