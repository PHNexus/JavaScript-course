// variavel boolean
var n1 = 1545.5;
// ira corrigir os pontos e virgulas etc moeda brasileira
console.log(n1.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));