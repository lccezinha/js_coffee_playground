function Animation(context) {
  this.context = context;
  this.sprites = [];
  this.active = false;
}

Animation.prototype = {
  newSprint: function(sprite) {
    this.sprites.push(sprite);
  },

  start: function() {
    this.active = true;
    this.nextFrame();
  },

  turnOff: function() {
    this.active = false;
  },

  nextFrame: function() {
    if(!this.active) return;

    this.clearScreen();

    for(var i in this.sprites) {
      this.sprites[i].update();
      this.sprites[i].draw();
    }

    var animation = this;
    requestAnimationFrame(function() {
      animation.nextFrame()
    });
  },

  clearScreen: function() {
    var ctx = this.context;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }
}

