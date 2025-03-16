// filtrar numeros
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filter = numeros.filter((a) => a % 2 == 0);
console.log(filter);

// numeros impares
var impar = numeros.filter((b) => b % 2 == 1);
console.log(impar);

// numeros maiores q 5
var maior = numeros.filter((c) => c > 5);
console.log(maior);
