/* variavel com a bebida, seguintes opções

Leite Chá e café
se vc digitar outro nome ira aparecer no terminal 
opção invalida

*/
var bebidas = "Digite";
// valor dinheiro
let valor = "";

//
switch (bebidas) {
  case "Leite":
    valor = 2.5;
    break;
  case "Chá":
    valor = 1.5;
    break;
  case "café":
    valor = 3.5;
    break;

  default:
    console.log("opção inválida, " + valor);
}

// imprimir
console.log();
