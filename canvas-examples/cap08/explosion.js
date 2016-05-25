var SHOT_EXPLOSION = new Audio();
SHOT_EXPLOSION.src = '../snd/explosao.mp3';
SHOT_EXPLOSION.volume = 0.4;
SHOT_EXPLOSION.load();

function Explosion(context, image, x, y) {
  this.context = context;
  this.image = image;
  this.spritesheet = new Spritesheet(context, image, 1, 5);
  this.spritesheet.interval = 75;
  this.x = x;
  this.y = y;

  var explosion = this;
  this.endExplosion = null;
  this.spritesheet.endCycle = function() {
    explosion.animation.newSpriteToDestroy(explosion);
    if (explosion.endExplosion) explosion.endExplosion();
  }

  SHOT_EXPLOSION.currentTime = 0.0;
  SHOT_EXPLOSION.play();
}

Explosion.prototype = {
  update: function() {

  },

  draw: function() {
    this.spritesheet.draw(this.x, this.y);
    this.spritesheet.nextFrame();
  }
}