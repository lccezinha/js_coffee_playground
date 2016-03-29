var SONIC_RIGHT = 1;
var SONIC_LEFT = 2;

function Sonic(context, keyboard, image) {
  this.context = context;
  this.keyboard = keyboard;
  this.x = 0;
  this.y = 0;
  this.speed = 10;

  this.sheet = new Spritesheet(context, image, 3, 8);
  this.sheet.interval = 60;

  this.walking = false;
  this.direction = SONIC_RIGHT;
}

Sonic.prototype = {
  update: function() {
    if (this.keyboard.press(ARROW_RIGHT)) {
      if (!this.walking || this.direction != SONIC_RIGHT) {
        this.sheet.line = 1;
        this.sheet.column = 0;
      }

      this.walking = true;
      this.direction = SONIC_RIGHT;
      this.sheet.nextFrame();
      this.x += this.speed;
    } else if (this.keyboard.press(ARROW_LEFT)) {
      if (!this.walking || this.direction != SONIC_LEFT) {
        this.sheet.line = 2;
        this.sheet.column = 0;
      }

      this.walking = true
      this.direction = SONIC_LEFT;
      this.sheet.nextFrame();
      this.x -= this.speed;
    } else {
      if (this.direction == SONIC_RIGHT)
        this.sheet.column = 0;
      else if (this.direction == SONIC_LEFT)
        this.sheet.column = 1;

      this.sheet.line = 0;
      this.walking = false;
    }
  },

  draw: function() {
    this.sheet.draw(this.x, this.y);
  }
}