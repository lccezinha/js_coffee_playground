function Shot(context, plane) {
  this.context = context;
  this.plane = plane;

  this.width = 3;
  this.height = 15;
  this.x = plane.x + plane.image.width / 2 - this.width / 2;
  this.y = plane.y - this.height;
  this.color = 'red';
  this.speed = 10;
}

Shot.prototype = {
  update: function() {
    this.y -= this.speed;
  },

  draw: function() {
    var ctx = this.context;
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
  }
}