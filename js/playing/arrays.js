// criando
var arr = [];

//OU
var arr = new Array();

//criando com tamanho default
var arr = new Array(5) // => [?, ?, ?, ?, ?]

//concat = concatena o array com o outro
var arr = ['Metallica', 'Megadeth', 'Slayer'];
console.log(arr.concat('Kreator', 'Exodus')); // ["Metallica", "Megadeth", "Slayer", "Kreator", "Exodus"]

//join(delimitador = ','), une os arrays pelo delimitador
var arr = ['Metallica', 'Megadeth', 'Slayer'];
console.log(arr.join('-')); // "Metallica-Megadeth-Slayer"

//push - adiciona um elemento no fim do array
var arr = ['Metallica', 'Megadeth', 'Slayer'];
arr.push('Exodus');
console.log(arr); // ['Metallica', 'Megadeth', 'Slayer', 'Exodus'];

//pop - remove o último elemento e o retorna
var arr = ['Metallica', 'Megadeth', 'Slayer']
arr.push(); // 'Slayer'
console.log(arr); //['Metallica', 'Megadeth']

//shift() - remove o primeiro elemento e o retorna
var arr = ['Metallica', 'Megadeth', 'Slayer']
arr.push(); // 'Metallica'
console.log(arr); //['Megadeth', 'Slayer']

//unshif() - adiciona item(ns) no inicio do array
var arr = ['Metallica', 'Megadeth', 'Slayer']
arr.unshift('Exodus')
console.log(arr); //["Exodus", "Metallica", "Megadeth", "Slayer"]

//slice(inicio, quantidade) - remove itens do array
var arr = ['Metallica', 'Megadeth', 'Slayer'];
arr = arr.slice(1, 1);
console.log(arr)

//sort()
var arr = ['Metallica', 'Megadeth', 'Slayer'];
arr = arr.sort();
console.log(arr) //['Slayer', 'Metallica', 'Megadeth'];

//indexOf(item) retorna o index do elemento, quando encontrado
var arr = ['Metallica', 'Megadeth', 'Slayer'];
console.log(arr.indexOf('Slayer')) // => 0

//forEach
var arr = ['Metallica', 'Megadeth', 'Slayer'];
arr.forEach(function(band){
  console.log("METAL BAND: " + band);
});

// map
var arr = ['Metallica', 'Megadeth', 'Slayer'];
var arr_two = arr.map(function(band){
  return band.toUpperCase();
});
console.log(arr_two)

// filter()
var arr = ['Metallica', 'Megadeth', 'Slayer'];
var item = arr.filter(function(band){
  return band == 'Metallica'
});
console.log(item)

// every() - retorna true se todos os itens forem true
function isNumber(value){
  return typeof value == 'number';
}
var a1 = [1, 2, 3];
alert(a1.every(isNumber)); // Alerts true
var a2 = [1, '2', 3];
alert(a2.every(isNumber)); // Alerts false

// some - retorna true se ao menos um item for true
function isNumber(value){
  return typeof value == 'number';
}
var a1 = [1, 2, 3];
alert(a1.some(isNumber)); // Alerts true
var a2 = [1, '2', 3];
alert(a2.some(isNumber)); // Alerts true
var a3 = ['1', '2', '3'];
alert(a3.some(isNumber)); // Alerts false