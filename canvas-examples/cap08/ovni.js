function Ovni(context, image, imageExplosion) {
  this.context = context;
  this.image = image;
  this.x = 0;
  this.y = 0;
  this.speed = 0;
  this.imageExplosion = imageExplosion
}

Ovni.prototype = {
  update: function() {
    this.y += this.speed;

    if (this.y > this.context.canvas.height) {
      this.animation.newSpriteToDestroy(this);
      this.colider.newSpriteToDestroy(this);
    }
  },

  draw: function() {
    var ctx = this.context;
    var img = this.image;
    ctx.drawImage(img, this.x, this.y, img.width, img.height);
  },

  rectsCollision: function() {
    var rects = [
      { x: this.x + 20, y: this.y + 1, width: 25, height: 10 },
      { x: this.x + 2, y: this.y + 11, width: 60, height: 12 },
      { x: this.x + 20, y: this.y + 23, width: 25, height: 7 }
    ];

    // var ctx = this.context;

    // for (var i in rects) {
    //    ctx.save();
    //    ctx.strokeStyle = 'yellow';
    //    ctx.strokeRect(rects[i].x, rects[i].y, rects[i].width,
    //                   rects[i].height);
    //    ctx.restore();
    // }

    return rects;
  },

  collisionWith: function(otherSprite) {
    if (otherSprite instanceof Shot ) {
      this.animation.newSpriteToDestroy(this);
      this.colider.newSpriteToDestroy(this);
      this.animation.newSpriteToDestroy(otherSprite);
      this.colider.newSpriteToDestroy(otherSprite);

      var explosion = new Explosion(this.context, this.imageExplosion, this.x, this.y);
      this.animation.newSprite(explosion);
    }
  }

}