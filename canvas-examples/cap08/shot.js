var SHOT_SOUND = new Audio();
SHOT_SOUND.src = '../snd/tiro.mp3';
SHOT_SOUND.volume = 0.2;
SHOT_SOUND.load();

function Shot(context, plane) {
  this.context = context;
  this.plane = plane;

  this.width = 3;
  this.height = 10;
  this.x = plane.x + 18;
  this.y = plane.y - this.height;
  this.color = 'yellow';
  this.speed = 5;

  SHOT_SOUND.currentTime = 0.0;
  SHOT_SOUND.play();
}

Shot.prototype = {
  update: function() {
    this.y -= this.speed;

    if (this.y < -this.height) {
      this.animation.newSpriteToDestroy(this);
      this.colider.newSpriteToDestroy(this);
    }
  },

  draw: function() {
    var ctx = this.context;
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
  },

  rectsCollision: function() {
    return [{ x: this.x, y: this.y, width: this.width, height: this.height }];
  },

  collisionWith: function(otherSprite) {

  }
}