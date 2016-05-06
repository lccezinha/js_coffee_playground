function Explosion(context, image, x, y) {
  this.context = context;
  this.image = image;
  this.spritesheet = new Spritesheet(context, image, 1, 5);
  this.spritesheet.interval = 75;
  this.x = x;
  this.y = y;

  var explosion = this;
  this.spritesheet.endCycle = function() {
    explosion.animation.newSpriteToDestroy(explosion);
  }
}

Explosion.prototype = {
  update: function() {

  },

  draw: function() {
    this.spritesheet.draw(this.x, this.y);
    this.spritesheet.nextFrame();
  }
}