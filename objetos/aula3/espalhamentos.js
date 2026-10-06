const cliente = {
    nome: "Thassila",
    idade: 16,
    email: "thassila@firma.com",
    telefone: ["4255555444", "42999885544"],
};

cliente.endereco = [
{
    rua: "Avenida Getulio Vargas",
    numero: 580,
    apartamento: true,
    complemento: "ap 3",
},
];

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`);
    console.log(`${telefoneResidencial}`);
}

ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

const encomenda= {
    destinario: cliente.nome,
    rua: cliente.endereco[0].rua,
    numero: cliente.endereco[1].numero,

};
console.log(encomenda);

