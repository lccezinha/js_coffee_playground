// compila a Regex quando o arquivo é carregado, ou seja, uma única vez.
// permance constante durante a execução. (melhor performance)
var re = /ab+c/;

// compila em tempo de execução
// recomendado usar quando se sabe que a regra da RegExp irá mudar constantemente
// ou quando não se sabe o padrão da mascará
var re = RegExp("ab+c");