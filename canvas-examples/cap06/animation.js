function Animation(context) {
   this.context = context;
   this.sprites = [];
   this.online = false;
}
Animation.prototype = {
   newSprite: function(sprite) {
      this.sprites.push(sprite);
      sprite.animation = this;
   },
   start: function() {
      this.online = true;
      this.nextFrame();
   },
   off: function() {
      this.online = false;
   },
   nextFrame: function() {
      if ( ! this.online ) return;

      this.clearScreen();

      for (var i in this.sprites)
         this.sprites[i].update();

      for (var i in this.sprites)
         this.sprites[i].draw();

      var animation = this;
      requestAnimationFrame(function() {
         animation.nextFrame();
      });
   },
   clearScreen: function() {
      var ctx = this.context;
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
   }
}
