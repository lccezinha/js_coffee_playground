function Background(context, image) {
  this.context = context;
  this.image = image;
  this.speed = 0;
  this.imageCopy = 0;
}

Background.prototype = {
  update: function() {
    this.positionJoin = this.speed * this.animation.timeElapsed / 1000;

    var image = this.image;

    var posititonY = this.imageCopy - image.height;
    this.context.drawImage(image, 0, posititonY, image.width, image.height);

    var posititonY = this.imageCopy;
    this.context.drawImage(image, 0, posititonY, image.width, image.height);
  },

  draw: function() {
    this.imageCopy += this.speed;

    if (this.imageCopy > this.image.height)
      this.imageCopy = 0;
  }
};