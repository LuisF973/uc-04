class Conta {
    #saldo;
    constructor(saldoInicial){
        this.#saldo = saldoInicial;
        Object.freeze(this)
    }
    depositar(valor){
        if (valor > 0) {
            this.#saldo += valor;
        } 
    }
    sacar(valor){
        if(valor > 0 && valor <=this.#saldo){
            this.#saldo -= valor;
        }
    }
    get getSaldo(){
        return this.#saldo;
    }
}

const c1 = new Conta(500);
console.log(c1.getSaldo);
// console.log(c1.saldo) //Undefined pra mostrar q n da pra manipular o que ta encapsulado
// c1.saldo = 5000
// console.log(c1.saldo)
console.log(c1.getSaldo)