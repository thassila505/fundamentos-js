const cliente = {
    nome: "Thassila",
    idade: 16,
    email: "thassila@filma.com",
    telefone: ["42555991323", "42999885544"],
}
[

cliente.endereco ={
    rua: "Avenida Getulio Vargas",
    numero: 1931,
    apartamento: true,
    complemento: "ap 591",
},
];

cliete.endereco.push({
    rua: "R. XV de novembro",
    numero: 350,
    apartamento: false,
});

const listaApenasApartamentos = cliente.endereco.filter(
    (endereco) => endereco.apartamento === true
);
console.log(listaApenasApartamentos);