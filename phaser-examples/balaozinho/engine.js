var game = new Phaser.Game(400, 500);

var cursors, man, ball, scoreLabel, messageLabel;
var score = 0;
var MAN_SPEED = 300;

var finishState = {
  preload: function() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
  },

  create: function() {
    game.add.sprite(0, 0, 'sky');
    game.add.sprite(0, game.world.height - 30, 'ground');

    var labelOptions = { font: "30px Arial", fill: "#ffffff" };
    labelScore = game.add.text(20, 180, 'Press SPACEBAR to Play', labelOptions);

    var scoreLabel = { font: "30px Arial", fill: "#ffffff" };
    scoreLabel = game.add.text(170, 230, score, labelOptions);

    var spaceBarKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceBarKey.onDown.addOnce(startGame, this);

    score = 0;
  },

  update: function() {

  }
};

var menuState = {
  preload: function() {
    game.load.image('sky', 'assets/sky.png');
    game.load.image('ground', 'assets/platform.png');
  },

  create: function() {
    game.add.sprite(0, 0, 'sky');
    game.add.sprite(0, game.world.height - 30, 'ground');

    var labelOptions = { font: "30px Arial", fill: "#ffffff" };
    labelScore = game.add.text(20, 220, 'Press SPACEBAR to Play', labelOptions);

    var spaceBarKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceBarKey.onDown.addOnce(startGame, this);
  },

  update: function() {}
};

function startGame() {
  game.state.start('main');
};

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
    ball.body.collideWorldBounds = true;
    ball.body.bounce.setTo(0.9, 0.9);

    cursors = game.input.keyboard.createCursorKeys();

    // Score
    var labelOptions = { font: "30px Arial", fill: "#ffffff" };
    labelScore = game.add.text(20, 20, 0, labelOptions);
  },

  update: function() {
    game.physics.arcade.overlap(man, ball, handleCollision, null, this);

    if (ball.y >= game.world.height - 65) {
      finishGame();
    };

    man.body.velocity.x = 0;

    if (cursors.left.isDown) {
      man.body.velocity.x = -MAN_SPEED
    } else if (cursors.right.isDown) {
      man.body.velocity.x = MAN_SPEED;
    };
  }
};

function handleCollision() {
  incrementPoints();
  moveBall();
};

function incrementPoints() {
  score += 1;
  labelScore.text = score;
};

function moveBall() {
  ball.body.velocity.x = Math.random() * (-200 + (-200)) + 200;
  ball.body.velocity.y = -500;
};

function finishGame() {
  game.state.start('finish');
};

game.state.add('menu', menuState);
game.state.add('finish', finishState);
game.state.add('main', mainState);
game.state.start('menu');