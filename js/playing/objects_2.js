function Person(name){
  this.name = name;

  this.sayMyName = function(){
    return 'My name is: ' + this.name
  }
}

var person = new Person('Luiz')
var person_two = new Person('Cezer')

// para cada objeto que ele cria, ele ia criar uma vez o método this.sayMyName
// ou seja, se forem criados 50 objetos, ele vai criar 50 métodos iguais na memória


function Person(name){
  this.name
}

Pessoa.prototype.sayMyName = function(){
  return 'My name is: ' + this.name
}
//desse modo só tera um método em memória, ao contrário de um para cada novo objeto

//se precisar mais um método
Pessoa.prototype.sayMyNickName = function(){
  return 'Heisenberg';
}

//para sobreescrever o prototype por completo de uma só vez, pode-se fazer:
function Pessoa(name){
  this.name = name;
}

Pessoa.prototype = {
  constructor: Pessoa,

  sayMyName: function(){
    return 'Walter White';
  }
}