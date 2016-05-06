function Spritesheet(context, image, lines, columns) {
  this.context    = context;
  this.image      = image;
  this.numLines   = lines;
  this.numColumns = columns;
  this.interval   = 0;
  this.line       = 0;
  this.column     = 0;
  this.endCycle   = null;
}

Spritesheet.prototype = {
  nextFrame: function() {
    timeNow = new Date().getTime();

    if (!this.lastUpdate) this.lastUpdate = timeNow;

    if (timeNow - this.lastUpdate < this.interval) return;

    if (this.column < this.numColumns - 1)
      this.column++;
    else {
      this.column = 0;

      if (this.endCycle) this.endCycle();
    }

    this.lastUpdate = timeNow;
  },

  draw: function(x, y) {
    var widthFrame  = this.image.width / this.numColumns;
    var heightFrame = this.image.height / this.numLines;

    this.context.drawImage(
      this.image,
      widthFrame * this.column,
      heightFrame * this.line,
      widthFrame,
      heightFrame,
      x,
      y,
      widthFrame,
      heightFrame);
  }
}