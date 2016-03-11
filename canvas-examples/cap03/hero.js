var DIR_LEFT = 1;
var DIR_RIGHT = 2;

function Hero(context, keyboard, animation) {
  this.context = context;
  this.keyboard = keyboard;
  this.animation = animation;
  this.positionX = 0;
  this.positionY = 100;
  this.direction = DIR_RIGHT;
}

Hero.prototype = {
  update: function() {
    if (this.keyboard.press(LEFT) && this.positionX > 0) {
      this.direction = DIR_LEFT;
      this.positionX -= 10;
    } else if (this.keyboard.press(RIGHT) && this.positionX < this.context.canvas.width - 20) {
      this.direction = DIR_RIGHT;
      this.positionX += 10;
    }
  },

  draw: function() {
    this.context.fillRect(this.positionX, this.positionY, 30, 50);
  },

  shot: function() {
    var shot = new Ball(this.context);
    shot.positionX = this.positionX + 10;
    shot.positionY = this.positionY + 10;
    shot.radius = 2;
    shot.color = 'red';

    if (this.direction == DIR_LEFT) {
      shot.speed = -20;
    } else {
      shot.speed = 20;
    }

    this.animation.newSprite(shot);
  }
}