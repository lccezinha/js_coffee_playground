var SPACE = 32;
var LEFT = 37;
var UP = 38;
var RIGHT = 39;
var DOWN = 40;

function Keyboard(element) {
  this.element = element;
  this.pressed = [];
  this.shots = [];
  this.shotFunctions = [];

  var keyboard = this;

  // element.addEventListener('keydown', function(event) {
  //   keyboard.pressed[event.keyCode] = true;
  // });

  // element.addEventListener('keyup', function(event) {
  //   keyboard.pressed[event.keyCode] = false;
  // });

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