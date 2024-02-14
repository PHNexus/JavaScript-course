// variavel array nome
var nome = ["Lucas", "Vinicius", "Edvaldo"];
// variavel novos nomes a aparecer nas posições 1 e 2
var novos =  nome.splice (1,2,"Leo", "Leonardo");
// imprimir a variavel 
console.log(nome);

/*
ira adicionar os nomes leo e leonardo nas posiçoes 1 e 2
e ira excluir os nomes Vinicius e edvaldo


*/


nome.push("Tiringa")

console.log(nome)
// ira adicionar o nome tiringa ao final da linha


var a = nome.indexOf("Lucas")
console.log(a)
// ira procurar a posição do nome lucas q seria 0

var n = nome.indexOf("Leo")
console.log(n)
// ira procurar a posição do nome leo q seria -1