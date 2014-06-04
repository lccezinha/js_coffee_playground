function Employee(){
  this.name = '';
}

function SalesMan(){
  this.salary = 1000;
}
SalesMan.prototype = new Employee;

function SalesMaster(){
  this.bonus = 100;
}
SalesMaster.prototype = new SalesMan;

function SalesJunior(){
  this.bonus = 50;
}
SalesJunior.prototype = new SalesMan;
SalesJunior.prototype.getFinalSalary = function(){
  return this.salary + this.bonus;
}

var salesJunior = new SalesJunior();
salesJunior.name = 'Cezer'

console.log(salesJunior.name);
console.log(salesJunior.getFinalSalary());