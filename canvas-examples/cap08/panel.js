function Panel(context, plane) {
  this.context = context;
  this.plane = plane;
  this.spritesheet = new Spritesheet(context, plane.image, 3, 2);
  this.spritesheet.line = 0;
  this.spritesheet.column = 0;
}

Panel.prototype = {
  update: function() {

  },

  draw: function() {
    this.context.scale(0.5, 0.5);
    var x = 20;
    var y = 20;

    for (var i = 1; i <= this.plane.extraLifes; i++) {
      this.spritesheet.draw(x, y);
      x += 40;
    }

    this.context.scale(2, 2);
  }
}