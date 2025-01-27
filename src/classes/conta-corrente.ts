import { Conta } from "./conta";

export class ContaCorrente extends Conta {
    private _tarifa: number = 0.005
    private _limite: number 

    constructor(numero: number, titular: string, saldo: number, limite: number){
        super(numero,titular,saldo)
        this._limite = limite
    }

    public get limite(): number {
        return this._limite
    }

    public sacar(valor: number): number{
        const tarifa = valor * this._tarifa
        const valorTotal = valor + tarifa
        if(valorTotal > this._saldo + this._limite){
            throw new Error("Saldo Insuficiente para o Saque")
        }
        this._saldo -= valorTotal
        return this._saldo
    }
}

