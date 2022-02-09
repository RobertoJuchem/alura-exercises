export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error('Não pode instanciar uma classe abstrata')
        }
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }
    
    set cliente(novocliente){
        if(novocliente instanceof Cliente){
            this._cliente = novocliente
        }
    }
    get cliente(){
        return this._cliente
    }

    get saldo (){
        return this._saldo
    }

    sacar(valor){
        throw new Error('O método sacar é abstrato')
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado
            return valorSacado
        }
        return 0
    }
    depositar(valor){
        if(valor > 0){
        this._saldo += valor
        return valor
        } 
    }
    transferir(valor, conta){
        const transferirValor = this.sacar(valor)
        conta.depositar(transferirValor)
    }
}