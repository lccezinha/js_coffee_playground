// compila a Regex quando o arquivo é carregado, ou seja, uma única vez.
// permance constante durante a execução. (melhor performance)
var re = /ab+c/;

// compila em tempo de execução
// recomendado usar quando se sabe que a regra da RegExp irá mudar constantemente
// ou quando não se sabe o padrão da mascará
var re = RegExp("ab+c");

//options para Regex

/pattern/g // global, afeta todos os matchs encontrados no pattern
/pattern/i // case insensitive
/pattern/m // multi linha

// .exec()
// executa uma busca por uma regex e retorna um array de informações
var pattern = /^a/;
var myArray = pattern.exec('anthrax') // => ["a", index: 0, input: "anthrax"]

// .test()
// executa uma busca por uma regex e retorna true ou false
var pattern = /^a/;
console.log(pattern.test('anthrax')); // => true

// .match()
// executa uma busca por uma RegExp, retorna um array de informações ou null
var pattern = /^a/;
console.log(pattern.match('anthrax'));

// .seach()
// retorna o index do match ou -1 se a busca falhar
var pattern = /^a/;
console.log(pattern.search('anthrax'));

// .replace()
// meio obvio, mas afeta só o 1 match
console.log('metallica'.replace(/l/, 'L')); // => metaLica

// afeta todos os matchs com quando se passa a opção 'g'
console.log('metallica'.replace(/l/g, 'L')); // => metaLica