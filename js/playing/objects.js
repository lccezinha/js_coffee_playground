// criando
var person = { name: 'Luiz', age: 23 };
console.log(person.name); // Luiz
console.log(person.age); // 23
console.log(person['name']); // Luiz
console.log(person['age']); // 23


// ou
var person = new Object();
person.name = 'Luiz'
person.age  = 23;
console.log(person.name); // Luiz
console.log(person.age); // 23
console.log(person['name']); // Luiz
console.log(person['age']); // 23

// or

var person = {}
person['name'] = 'Luiz';
person['age'] = 23;
console.log(person.name); // Luiz
console.log(person.age); // 23
console.log(person['name']); // Luiz
console.log(person['age']); // 23

// encapsulamento

function Person(name){
  this.name = name //public
}
var person = new Person('Luiz');
console.log(person.name) // = > Luiz

//

function Person(name){
  var name = name //privado
  //precisa criar um accessor
}
var person = new Person('Luiz');
console.log(person.name) // = > error

//---

function Person(name){
  var name = name //privado
  //precisa criar um accessor
  this.getName = function(){
    return name;
  }
}
var person = new Person('Luiz');
console.log(person.getName()) // = > error

