function Plane(context, keyboard, image) {
  this.context = context;
  this.keyboard = keyboard;
  this.image = image;
  this.x = 0;
  this.y = 0;
  this.speed = 0;
  this.spritesheet = new Spritesheet(context, image, 3, 2);
  this.spritesheet.line = 0;
  this.spritesheet.interval = 100;
}

Plane.prototype = {
  update: function() {
    if (this.keyboard.press(LEFT) && this.x > 0)
      this.x -= this.speed;

    if (this.keyboard.press(RIGHT) && this.x < this.context.canvas.width - 36)
      this.x += this.speed;

    if (this.keyboard.press(UP) && this.y > 0)
      this.y -= this.speed;

    if (this.keyboard.press(DOWN) && this.y < this.context.canvas.height - 48)
      this.y += this.speed;
  },

  draw: function() {
    if (this.keyboard.press(LEFT))
      this.spritesheet.line = 1;
    else if (this.keyboard.press(RIGHT))
      this.spritesheet.line = 2;
    else
      this.spritesheet.line = 0;

    this.spritesheet.draw(this.x, this.y);
    this.spritesheet.nextFrame();
  },

  shot: function() {
    var shot = new Shot(this.context, this);
    this.animation.newSprite(shot);
    this.colider.newSprite(shot);
  },

  rectsCollision: function() {
    var rects =  [
      { x: this.x + 2, y: this.y + 19, width: 9, height: 13 },
      { x: this.x + 13, y: this.y + 3, width: 10, height: 33 },
      { x: this.x + 25, y: this.y + 19, width: 9, height: 13 }
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
    if (otherSprite instanceof(Ovni)) {
      this.animation.newSpriteToDestroy(this);
      this.colider.newSpriteToDestroy(this);
      console.log('Errou');
      this.animation.off();
    }
  }
};