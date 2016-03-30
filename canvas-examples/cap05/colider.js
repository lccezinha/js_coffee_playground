function Collision() {
  this.sprites = [];
}

Collision.prototype = {
  newSprite: function(sprite) {
    this.sprites.push(sprite)
  },

  process: function() {
    for (var i in this.sprites) {
      for (var j in this.sprites) {
        if(i == j) continue;

        this.verifyCollision(this.sprites[i], this.sprites[j]);
      }
    }
  },

  verifyCollision: function(spriteA, spriteB) {
    var rectsA = spriteA.rectsCollision();
    var rectsB = spriteB.rectsCollision();

    collisions:
    for(var i in rectsA) {
      for (var j in rectsB) {
        if (this.isCollision(rectsA[i], rectsB[j])) {
          spriteA.collisionWith(spriteB);
          spriteB.collisionWith(spriteA);

          break collisions;
        }
      }
    }
  },

  isCollision: function(spriteA, spriteB) {
    return (spriteA.x + spriteA.width) > spriteB.x &&
            spriteA.x < (spriteB.x + spriteB.width) &&
           (spriteA.y + spriteA.height) > spriteB.y &&
           spriteA.y < (spriteB.y + spriteB.width)
  }
}