// variavel array numeros 1 a 4
var number = [1,2,3,4]
// variavel multiplicação 
// ira mostrar numeros q podem ser multiplicados por 5
var numbermult = number.map(function(element){

return element * 5;


})


//imprimir os numeros que podem multiplicar por 5
console.log(numbermult)


// variavel de funcionarios /empresa
var funcionarios = [

{nome: "weslen", função: "Mendingo"},

{nome: "helber", função: "Estagiario"},

{nome: "vinicius", função: "Senior"},



]
// variavel para despedir os funcionarios
var despedir = funcionarios.map(function(value){

return value.função == "Mendingo"


})

// return igual a função mendingo


/*imprimir os funcionarios true para 
despedidos false para or que ficaram
*/
console.log(despedir)