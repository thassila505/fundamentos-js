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

for (let chave in cliente){
    let tipo = typeof cliente{chave};
    if (tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente{chave}}`);
    }
}