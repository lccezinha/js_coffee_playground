var ARROW_LEFT = 37;
var ARROW_RIGHT = 39;
var SPACE = 32;

function Keyboard(element) {
  this.element = element;
  this.pressed = [];
  this.shots = [];
  this.shotFunctions = [];

  var keyboard = this;

  element.addEventListener('keydown', function(event) {
    var key = event.keyCode;
    keyboard.pressed[key] = true;

    if (keyboard.shotFunctions[key] && !keyboard.shots[key]) {
      keyboard.shots[key] = true;
      keyboard.shotFunctions[key] ();
    }
  });

  element.addEventListener('keyup', function(event) {
    var key = event.keyCode;

    keyboard.pressed[key] = false;
    keyboard.shots[key] = false;
  });
}

Keyboard.prototype = {
  press: function(key) {
    return this.pressed[key];
  },

  shot: function(key, callback) {
    this.shotFunctions[key] = callback;
  }
}