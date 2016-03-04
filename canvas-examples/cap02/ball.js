function Ball(context) {
  this.context = context;
  this.x = 0;
  this.y = 0;
  this.radius = 10;
  this.speedX = 0;
  this.speedY = 0;
  this.color = 'black';
}

Ball.prototype = {
  update: function() {
    var ctx = this.context;

    if(this.x < this.radius || this.x > ctx.canvas.width - this.radius) {
      this.speedX *= -1;
    }

    if(this.y < this.radius || this.y > ctx.canvas.height - this.radius) {
      this.speedY *= -1;
    }

    this.x += this.speedX;
    this.y += this.speedY;
  },

  draw: function() {
    var ctx = this.context;

    // Guarda as configs do contexto atual
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.restore();
  }
}