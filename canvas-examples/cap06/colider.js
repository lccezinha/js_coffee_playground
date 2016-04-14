function Collision() {
  this.sprites = [];
  this.whenCollision = null;
}

Collision.prototype = {
  newSprite: function(sprite) {
    this.sprites.push(sprite)
  },

  process: function() {
    var alreadyTested = new Object();

    for (var i in this.sprites) {
      for (var j in this.sprites) {
        if(i == j) continue;

        var id1 = this.createIdentifier(this.sprites[i]);
        var id2 = this.createIdentifier(this.sprites[j]);

        if (!alreadyTested[id1]) alreadyTested[id1] = [];
        if (!alreadyTested[id2]) alreadyTested[id2] = [];

        if (!(alreadyTested[id1].indexOf(id2) >= 0 || alreadyTested[id2].indexOf(id1) >= 0)) {
          this.verifyCollision(this.sprites[i], this.sprites[j]);

          alreadyTested[id1].push(id2);
          alreadyTested[id2].push(id1);
        }
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

          if (this.whenCollision) this.whenCollision(spriteA, spriteB);

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
  },

  createIdentifier: function(sprite) {
    var str = '';
    var rects = sprite.rectsCollision();

    for (var i in rects) {
      str += 'x:' + rects[i].x + ',' +
             'y:' + rects[i].y + ',' +
             'w:' + rects[i].width + ',' +
             'h:' + rects[i].height + '\n';
    }

    return str;
  }
}