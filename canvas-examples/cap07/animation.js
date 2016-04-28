function Animation(context) {
   this.context = context;
   this.sprites = [];
   this.online = false;
   this.processors = [];
   this.spritesToDestroy = [];
   this.processorsToDestroy = [];
}
Animation.prototype = {
   newSprite: function(sprite) {
      this.sprites.push(sprite);
      sprite.animation = this;
   },

   newSpriteToDestroy: function(sprite) {
      this.spritesToDestroy.push(sprite);
   },

   destroyProcess: function(processor) {
      this.processorsToDestroy.push(processor);
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

      this.destroySprites();

      var animation = this;
      requestAnimationFrame(function() {
         animation.nextFrame();
      });

   },

  destroySprites: function() {
    var newSprites = [];
    var newProcessors = []

    for (var i in this.sprites) {
      if (this.spritesToDestroy.indexOf(this.sprites[i]) == -1)
       newSprites.push(this.sprites[i]);
    }

    for (var i in this.processors) {
      if (this.processorsToDestroy.indexOf(this.sprites[i]) == -1)
       newProcessors.push(this.processors[i]);
    }

    console.log(spritesToDestroy)
    this.spritesToDestroy = [];
    this.sprites = newSprites;
    console.log(spritesToDestroy)

    this.processorsToDestroy = [];
    this.processors = newProcessors;
  },

   newProcessor: function(processor) {
      this.processors.push(processor);
      processor.animation = this
   }
}
