// variavel array valores
var valores = [8,1,7,2,9];
// imprimir valores somente da posição 3
console.log(valores[3])



// variavel array car
var car = [];
// variavel array posição definida 0
car[0] = "volvo";
// variavel array posição definida 1
car[1] = "jeep";

// variavel array splice
/*
ira adicionar as seguintes marcas
bmw e kawasaki junto com jeep
*/

var motos = car.splice(0,1, "bmw", "kawasaki")

// imprimiver a variavel car
console.log(car)
