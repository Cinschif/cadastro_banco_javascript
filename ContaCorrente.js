//#saldo = 0;   proposta para tornar privado:https://github.com/tc39/proposal-class-fields#private-fields
// usa so o _ para indicar q aquela prop seria privada apesar de nao ser de verdade
import { Client } from "./Cliente.js";


export class Account {
  static numeroDeContas = 0;
    agencia;
    _cliente;
    _saldo = 0;


    set cliente(novoValor) {
        if (novoValor instanceof Client) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(cliente,agencia){
        this.agencia= agencia;
        this.cliente = cliente;
        Account.numeroDeContas += 1;
    }



    depositar(value) {
        if (value <= 0) {
            return;
        }
        this._saldo += value;
    }

    sacar(value) {
        if (this._saldo >= value) {
            this._saldo -= value;
            return value;
        }
    }

    transferir(value, account) {
        const valorSacado = this.sacar(value);
        account.depositar(valorSacado);
    }
}