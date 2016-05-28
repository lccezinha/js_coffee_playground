var ball;
var bricks;
var paddle;

var mainState = {
  preload: function() {
    game.load.image('paddle', 'assets/paddle.png');
    game.load.image('brick', 'assets/brick.png');
    game.load.image('ball', 'assets/ball.png');
  },

  create: function() {
    game.state.backgroundColor = '#3589db';
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.world.enableBody = true;

    this.left  = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

    paddle = game.add.sprite(200, 400, 'paddle');
    paddle.body.immovable = true;
    paddle.body.collideWorldBounds = true;

    bricks = game.add.group();

    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        var brick = game.add.sprite(55+i * 60, 55+j*35, 'brick');
        brick.body.immovable = true;
        bricks.add(brick);
      }
    }

    ball = game.add.sprite(150, 300, 'ball');
    ball.body.velocity.x = 200;
    ball.body.velocity.y = 200;

    ball.body.bounce.setTo(1);
    ball.body.collideWorldBounds = true;
  },

  update: function() {
    if (this.left.isDown)
      paddle.body.velocity.x = -300;
    else if (this.right.isDown)
      paddle.body.velocity.x = 300;
    else
      paddle.body.velocity.x = 0;

    game.physics.arcade.collide(paddle, ball);
    game.physics.arcade.collide(ball, bricks, brickHit, null, this);

    if (ball.y > paddle.y)
      game.state.start('main');
  }
};

function brickHit(ball, brick) {
  brick.kill();
};

var game = new Phaser.Game(400, 450);
game.state.add('main', mainState);
game.state.start('main');