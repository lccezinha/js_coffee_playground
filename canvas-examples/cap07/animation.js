function Animation(context) {
   this.context = context;
   this.sprites = [];
   this.online = false;
   this.processors = [];
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

      for (var i in this.sprites) {
         this.sprites[i].update();
         this.sprites[i].draw();
      }

      for (var i in this.processors) {
         this.processors[i].process();
      }

      var animation = this;
      requestAnimationFrame(function() {
         animation.nextFrame();
      });
   },
   newProcessor: function(processor) {
      this.processors.push(processor);
      processor.animation = this
   }
}
