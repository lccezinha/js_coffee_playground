function Ovni(context, image) {
  this.context = context;
  this.image = image;
  this.x = 0;
  this.y = 0;
  this.speed = 0;
}

Ovni.prototype = {
  update: function() {
    var ctx = this.context;
    var img = this.image;
    ctx.drawImage(img, this.x, this.y, img.width, img.height);
  },

  draw: function() {
    this.y += this.speed;
  }
}