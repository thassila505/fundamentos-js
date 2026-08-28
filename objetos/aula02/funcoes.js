const cliente = {
    nome: "Thassila",
    idade: 16,
    email: "thassila@filma.com",
    telefone: ["42555991323", "42999885544"],
    saldo: 200, 
    efetuapagamento: function (valor){
        if (valor > this.saldo){
            console.log("Saldo insuficiente");
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`);
        }
    },
};

cliente.efetuapagamento(250);
