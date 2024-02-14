// variavel arrays lista de numeros
var numeros = [1,2,3,4,5,6,7,8,9,10]
// ira filtrar um numero menor ou igual a 2
var resultado = numeros.filter(a => a % 2 == 0)
// imprimir o resultado mostrando os numeros divisiveis por 2
console.log(resultado)


// var numeros filtrados
// ira retornar um numero  maior que 5
var numerosfiltrados = numeros.filter(
function(valor){

return valor > 5;

}

)

// ira imprimir o numero filtrado maior que 5
console.log(numerosfiltrados)

// função para buscar valores menores que 5
function buscarValores(valor){

return valor < 5;

}

// variavel dos numeros encontrados
var numerosEncontrados = numeros.filter(buscarValores);
// ira imprimir o numero encontrado
console.log(numerosEncontrados)



