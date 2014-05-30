// for..in
// itera sobre as propriedades de um objeto
var obj = { prop1: 10, prop2: 20, prop3: 30 };
for(var prop in obj){
  console.log("Property: " + prop);
}

// for each..in
// itera sobre OS VALORES das propriedades de um objeto
var obj = { prop1: 10, prop2: 20, prop3: 30 };
for each (var prop in obj){
  console.log("Property: " + prop);
}