export abstract class Conta {
    constructor(
    private _numero: number,
    private _titular: string,
    protected _saldo: number
    ){}

    public get numero(){
        return this._numero
    }

    public get titular(){
        return this._titular
    }

    public get saldo(){
        return this._saldo
    }

    public set numero(numero: number){
        const tamanho = numero
           if(tamanho < 3){
            throw new Error("Numero Invalido")
           }
    }

    public set titular(titular: string){
        const tamanho = titular.trim().length
        if(tamanho <= 0){
         throw new Error("Titular Invalido")
        }
        this._titular = titular.trim().toLowerCase()
     }

    public depositar(valor: number): number{
           if(valor <= 0 ){
            throw new Error("Valor de Deposito Invalido")
           }
           this._saldo += valor
           return this._saldo
    }

    public sacar(valor: number): number{
        if(valor <= 0){
            throw new Error(`Valor R$ ${valor} para saque invalido`)
        }
        if(this._saldo < valor){
            throw new Error("Saldo Insuficiente para o Saque")
        }
        this._saldo -= valor
        return this._saldo
    }

    public transferir(contaDestino: Conta, valor: number): number{
        this.sacar(valor)
        contaDestino.depositar(valor)
        return this._saldo
    }
}