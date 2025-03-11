const funcionarios = [
    { nome: "helber", idade: 25 },
    { nome: "marcos", idade: 15 },
    { nome: "weslem", idade: 20 },
    { nome: "tiringa", idade: 67 },
];

const pessoasListagem = funcionarios.filter((funcionario) => {
    return funcionario.nome.length > 5;
});

console.log(pessoasListagem);