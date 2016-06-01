var game = new Phaser.Game(400, 450);
var bird, pipes, timer, labelScore;
var score = 0;

var mainState = {
  preload: function() {
    game.load.image('bird', 'assets/bird.png');
    game.load.image('pipe', 'assets/pipe.png');
  },

  create: function() {
    game.stage.backgroundColor = '#71c5cf';
    game.physics.startSystem(Phaser.Physics.ARCADE);

    bird = game.add.sprite(100, 245, 'bird');
    pipes = game.add.group();

    game.physics.arcade.enable(bird);

    bird.body.gravity.y = 1000;

    var spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    spaceKey.onDown.add(jump, this);

    timer = game.time.events.loop(1500, createRowsOfPipe, this);

    var labelOptions = { font: "30px Arial", fill: "#ffffff" };
    labelScore = game.add.text(20, 20, 0, labelOptions);
  },

  update: function() {
    if (bird.y < 0 || bird.y > 490)
      restartGame();

    game.physics.arcade.overlap(bird, pipes, restartGame, null, this);
  }
};

function jump() {
  bird.body.gravity.y = -400;
};

function restartGame() {
  game.state.start('main');
};

function createPipe(x, y) {
  var pipe = game.add.sprite(x, y, 'pipe');
  pipes.add(pipe);
  game.physics.arcade.enable(pipe);
  pipe.body.velocity.x = -200;
  pipe.checkWorldBounds = true;
  pipe.outOfBoundsKill = true;

  incrementeScore();
};

function createRowsOfPipe() {
  var hole = Math.floor(Math.random() * 5) + 1;
  console.log('hole', hole)
  for (var i = 0; i < 8; i++) {
    if (i != hole && i != hole + 1)
      createPipe(400, i * 60 + 10);
  };
};

function incrementeScore() {
  score += 1;
  labelScore.text = score;
};

game.state.add('main', mainState);
game.state.start('main');