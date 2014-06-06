//escopos
function fullName(){
  var firstName = 'Luiz';

  function lastName(){
    // como essa functon está mais interna, ela tem acesso ao escopo de fora para a outra var
    var lastName = 'Cezer';

    alert('Full name: ' + firstName + ' ' + lastName);
  }
}
fullName();

//Criação

// declaration
function sayHello1() {
  alert("Hello");
}

// expression
var sayHello2 = function() {
  alert("Hello");
};

// constructor (not recommended)
var sayHello3 = new Function("alert('Hello')");


// Diferença entre declaration x expression

// Function declarations are hoisted just as variables are, while only the variable declaration
// of a function expression is hoisted. For example, this is possible with a function declaration:

// It’s possible because the entire hi function is hoisted above alert and is therefore
// available when alert uses it
alert(hi());

function hi(){
  return 'LOL';
}

// similar example using a function expression, which will throw a TypeError: undefined is not a function error

alert(hey());

var hey = function(){
  return 'hey';
}

// The reason the error says "undefined is not a function" is because at run time,
// the hey variable declaration is hoisted above the alert but the assignment of the
// function remains below.

// **********************
// If you’re going to use function declarations, always declare them at the top of your
// code’s scope (be it the global or local scope) so as to avoid hoisting, and to make it
// clear to the reader when the function is actually available for use.

// If you’re going to use function expressions,
// declare the variables you’ll be assigning to your functions at the top of your local scope for the same reason.